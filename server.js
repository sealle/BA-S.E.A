const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = routes.getRequestHandler(app);
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const database = require("./db.config");
const Pusher = require("pusher");
const bcrypt = require("bcrypt-nodejs");
const saltRounds = 10;
const fs = require("fs");
const path = require("path");
const jwtDecode = require("jwt-decode");
const nodemailer = require("nodemailer");
const SqlString = require("sqlstring");
const Web3 = require("web3");
const web3 = new Web3();
// const https = require("https");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

//jwt secret
const secret = "iliketurtles";
const EMAIL_SECRET = "yello15873";
const date = require("date-and-time");

//Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "no.reply.sealle@gmail.com",
    pass: "iLikeTurtles"
  }
});

//Pusher setup
const pusher = new Pusher({
  appId: "601383",
  key: "0f924dcd44dc93a88aa7",
  secret: "2d7e81c42956ced982b5",
  cluster: "eu",
  encrypted: true
});

const express = require("express");

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.text());
    server.use(bodyParser.json());

    server.use(cors());

    server.use(cookieParser());
    server.use(fileUpload());

    //Registration
    server.post("/register", urlEncodedParser, (req, response) => {
      let image = req.files.file1;
      let image2 = req.files.file2;

      let imageName = `${req.body.username}-${image.name}`;
      let imageName2 = `${req.body.username}-${image2.name}`;

      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, null, function(err, hash) {
          let now = date.format(new Date(), "DD.MM.YYYY HH:mm:ss [GMT]Z");
          let nowShort = date.format(new Date(), "DD.MM.YY");
          let body = req.body;

          //prevent sql injection by escaping user input (format())
          let insertSQL = SqlString.format(
            "INSERT INTO users SET username=?, password=?, fname=?, lname=?, street=?, houseNr=?, postCode=?, placeOfRes=?, dateOfBirth=?, nat=?, email=?, mobNr=?, ID1=?, ID2=?, regDate=?, isComp=?, lastModified=?",
            [
              body.username,
              hash,
              body.fname,
              body.lname,
              body.street,
              body.houseNr,
              body.postCode,
              body.placeOfRes,
              body.dateOfBirth,
              body.nat,
              body.email,
              body.mobNr,
              imageName,
              imageName2,
              now,
              0,
              nowShort
            ]
          );
          let searchSQL = SqlString.format(
            "SELECT * FROM users WHERE username=?",
            [body.username]
          );
          let searchEmail = SqlString.format(
            "SELECT * FROM users WHERE email=?",
            [body.email]
          );
          database.connection.query(searchSQL, function(err, res) {
            if (err) {
              response
                .status(400)
                .json({ message: "Database Server is not connected!" });
            } else {
              //check if username exists
              if (res.length) {
                response.status(400).json({
                  success: false,
                  message: "Username already exists! Choose a different one."
                });
                console.log("User already exists");
              } else {
                // database.connection.query(searchEmail, function(err, res) { TODO: Enable once finished!
                //   //check if email exists
                //   if (err) {
                //     response
                //       .status(400)
                //       .json({ message: "Database Server is not connected!" });
                //   } else {
                //     if (res.length) {
                //       response.status(400).json({
                //         success: false,
                //         message: "Email already exists! Choose a different one."
                //       });
                //       console.log("Email already exists");
                //     } else {
                database.connection.query(insertSQL, function(err, result) {
                  if (err) {
                    response.status(400).json({
                      message: "Database Server is not connected!"
                    });
                  } else {
                    jwt.sign(
                      {
                        username: body.username,
                        emailToken: crypto
                          .createHash("sha256")
                          .update(body.username)
                          .digest("hex")
                      },
                      EMAIL_SECRET,
                      {
                        expiresIn: 36000 //1h
                      },
                      (err, emailToken) => {
                        const url = `http://localhost:3000/activate/${emailToken}`;
                        transporter.sendMail({
                          from: "no.reply.sealle@gmail.com",
                          to: body.email,
                          subject: "Confirm Email",
                          html: `Please click this link to confirm your email: <br/><a href="${url}">${url}</a>`
                        });
                      }
                    );
                    image.mv("static/" + imageName, function(err) {
                      if (err) return response.status(500).send(err);
                    });
                    image2.mv("static/" + imageName2, function(err) {
                      if (err) return response.status(500).send(err);
                    });
                    response.status(200).json({
                      success: true,
                      message: "successfully registered!"
                    });
                    console.log("1 record inserted");
                  }
                });
              }
              //     }
              //   });
              // }
            }
          });
        });
      });
    });

    //Registration for companies
    server.post("/companyregister", urlEncodedParser, function(req, response) {
      let image = req.files.file1;
      let image2 = req.files.file2;
      let doc = req.files.doc1;
      let doc2 = req.files.doc2;

      let imageName = `${req.body.username}-${image.name}`;
      let imageName2 = `${req.body.username}-${image2.name}`;
      let docName = `${req.body.username}-${doc.name}`;
      let docName2 = `${req.body.username}-${doc2.name}`;

      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, null, function(err, hash) {
          let now = date.format(new Date(), "DD.MM.YYYY HH:mm:ss [GMT]Z");
          let nowShort = date.format(new Date(), "DD.MM.YY");
          let body = req.body;

          //prevent sql injection by escaping user input (format())
          let insertSQL = SqlString.format(
            "INSERT INTO users SET username=?, password=?, fname=?, lname=?, street=?, houseNr=?, postCode=?, placeOfRes=?, dateOfBirth=?, nat=?, email=?, mobNr=?, ID1=?, ID2=?, regDate=?, compName=?, compPostCode=?, residence=?, businessAd=?, compHouseNr=?, doc1=?, doc2=?, isComp=?, lastModified=?",
            [
              body.username,
              hash,
              body.fname,
              body.lname,
              body.street,
              body.houseNr,
              body.postCode,
              body.placeOfRes,
              body.dateOfBirth,
              body.nat,
              body.email,
              body.mobNr,
              imageName,
              imageName2,
              now,
              body.compName,
              body.compPostCode,
              body.residence,
              body.businessAd,
              body.compHouseNr,
              docName,
              docName2,
              1,
              nowShort
            ]
          );
          let searchSQL = SqlString.format(
            "SELECT * FROM users WHERE username=?",
            [body.username]
          );
          let searchEmail = SqlString.format(
            "SELECT * FROM users WHERE email=?",
            [body.email]
          );
          database.connection.query(searchSQL, function(err, res) {
            if (err) {
              response
                .status(400)
                .json({ message: "Database Server is not connected!" });
            } else {
              if (res.length) {
                response.status(400).json({
                  success: false,
                  message: "Username already exists! Choose a different one."
                });
                console.log("User already exists");
              } else {
                // database.connection.query(searchEmail, function(err, res) {
                //   if (err) {
                //     response
                //       .status(400)
                //       .json({ message: "Database Server is not connected!" });
                //   } else {
                //     if (res.length) {
                //       response.status(400).json({
                //         success: false,
                //         message: "Email already exists! Choose a different one."
                //       });
                //       console.log("Email already exists");
                //     } else {
                database.connection.query(insertSQL, function(err, result) {
                  if (err) {
                    response.status(400).json({
                      message: "Database Server is not connected!"
                    });
                  } else {
                    jwt.sign(
                      {
                        username: body.username,
                        emailToken: crypto
                          .createHash("sha256")
                          .update(body.username)
                          .digest("hex")
                      },
                      EMAIL_SECRET,
                      {
                        expiresIn: 36000 //1h
                      },
                      (err, emailToken) => {
                        const url = `http://localhost:3000/activate/${emailToken}`;
                        transporter.sendMail({
                          from: "no.reply.sealle@gmail.com",
                          to: body.email,
                          subject: "Confirm Email",
                          html: `Please click this link to confirm your email: <br/><a href="${url}">${url}</a>`
                        });
                      }
                    );
                    image.mv("static/" + imageName, function(err) {
                      if (err) return response.status(500).send(err);
                    });
                    image2.mv("static/" + imageName2, function(err) {
                      if (err) return response.status(500).send(err);
                    });
                    doc.mv("static/" + docName, function(err) {
                      if (err) return response.status(500).send(err);
                    });
                    doc2.mv("static/" + docName2, function(err) {
                      if (err) return response.status(500).send(err);
                    });
                    response.status(200).json({
                      success: true,
                      message: "successfully registered!"
                    });
                    console.log("1 record inserted");
                  }
                });
              }
              //     }
              //   });
              // }
            }
          });
        });
      });
    });

    //Login
    server.post("/authenticate", (req, response) => {
      let body = req.body;
      //preventing SQL injection
      let searchUserName = SqlString.format(
        "SELECT * FROM users WHERE username=?",
        [body.username]
      );
      database.connection.query(searchUserName, function(err, result, fields) {
        if (err) {
          response
            .status(400)
            .json({ message: "Database Server is not connected!" });
        } else if (!result.length) {
          response
            .status(400)
            .json({ message: "Username or password is incorrect!" });
        } else if (result[0].active == "0") {
          response
            .status(400)
            .json({ message: "You have not confirmed your Email address!" });
        } else {
          if (result.length) {
            bcrypt.compare(body.password, result[0].password, function(
              err,
              res
            ) {
              if (res) {
                if (result[0].privileges == "admin") {
                  let adminToken = jwt.sign(
                    {
                      username: body.username,
                      role: 1,
                      reg: 1,
                      xsrfToken: crypto
                        .createHash("sha256")
                        .update(body.username)
                        .digest("hex")
                    },
                    secret,
                    {
                      expiresIn: 36000 //1h
                    }
                  );
                  response.status(200).json({
                    success: true,
                    message: "Enjoy your token",
                    adminToken: adminToken,
                    registerStatus: result[0].isRegistered,
                    privileg: result[0].privileges
                  });
                } else if (
                  result[0].privileges == "user" &&
                  result[0].isRegistered == "yes" &&
                  result[0].kycKey != "declined"
                ) {
                  let userToken = jwt.sign(
                    {
                      username: body.username,
                      role: 0, //user
                      reg: 1, //registered
                      xsrfToken: crypto
                        .createHash("sha256")
                        .update(body.username)
                        .digest("hex")
                    },
                    secret,
                    {
                      expiresIn: 36000 //1h
                    }
                  );
                  response.status(200).json({
                    success: true,
                    message: "Enjoy your token",
                    userToken: userToken,
                    registerStatus: result[0].isRegistered,
                    privileg: result[0].privileges
                  });
                } else if (result[0].kycKey == "declined") {
                  response.status(200).json({
                    success: true,
                    message:
                      "This username has been declined. You cannot login!",
                    declined: "declined"
                  });
                } else {
                  let registerToken = jwt.sign(
                    {
                      username: body.username,
                      role: 0,
                      reg: 0,
                      paid: 0,
                      xsrfToken: crypto
                        .createHash("sha256")
                        .update(body.username)
                        .digest("hex")
                    },
                    secret,
                    {
                      expiresIn: 36000 //1h
                    }
                  );
                  response.status(200).json({
                    success: true,
                    message: "Enjoy your token",
                    registerToken: registerToken,
                    registerStatus: result[0].isRegistered,
                    privileg: result[0].privileges
                  });
                }
              } else {
                console.log(err);
                response.status(400).json({
                  success: false,
                  message: "Username or Password is not correct!"
                });
              }
            });
          } else {
            console.log(err);
            response.status(400).json({
              success: false,
              message: "Username or Password is not correct!"
            });
          }
        }
      });
    });

    //Account activation from email
    server.get("/activate/:token", urlEncodedParser, (req, response) => {
      try {
        jwt.verify(req.params.token, EMAIL_SECRET, async (err, decoded) => {
          if (err) {
            response.redirect("/login");
          } else {
            let username = decoded.username;
            let sql = SqlString.format(
              "UPDATE users SET active=? WHERE username=?",
              [1, username]
            );
            await database.connection.query(sql, function(err, req, res) {
              if (err) {
                response.send("error");
              } else {
                response.redirect("/login");
              }
            });
          }
        });
      } catch (e) {
        console.log(e);
      }
    });

    server.post("/resendConfirmEmail", urlEncodedParser, (req, response) => {
      jwt.sign(
        {
          username: req.body.username,
          emailToken: crypto
            .createHash("sha256")
            .update(req.body.username)
            .digest("hex")
        },
        EMAIL_SECRET,
        {
          expiresIn: 36000 //1h
        },
        (err, emailToken) => {
          const url = `http://localhost:3000/activate/${emailToken}`;
          transporter.sendMail({
            from: "no.reply.sealle@gmail.com",
            to: req.body.email,
            subject: "Confirm Email",
            html: `Please click this link to confirm your email: <br/><a href="${url}">${url}</a>`
          });
        }
      );
      response.status(200).json({
        success: true,
        message: "successfully registered!"
      });
    });

    server.post("/resendPwEmail", urlEncodedParser, (req, response) => {
      jwt.sign(
        {
          username: req.body.username,
          pwResetToken: crypto
            .createHash("sha256")
            .update(req.body.username)
            .digest("hex")
        },
        EMAIL_SECRET,
        {
          expiresIn: 36000 //1h
        },
        (err, pwResetToken) => {
          const url = `http://localhost:3000/passwordchange/${pwResetToken}`;
          transporter.sendMail({
            from: "no.reply.sealle@gmail.com",
            to: req.body.email,
            subject: "Password Reset",
            html: `Please click on the link to reset your password: <br/><a href="${url}">${url}</a>`
          });
          if(err) {
            throw err;
          }
        }
      );
      response.status(200).json({
        success: true,
        message: "successfully registered!"
      });
    });

    //enter email to receive email
    server.post("/passwordreset", async (req, res) => {
      let body = req.body;
      let sql = SqlString.format("SELECT * FROM users WHERE username=?", [
        body.username
      ]);
      await database.connection.query(sql, async (err, result, fields) => {
        if (err) {
          res
            .status(400)
            .json({ message: "Database Server is not connected!" });
        } else {
          if (result.length && result[0].email == body.email) {
            await jwt.sign(
              {
                username: body.username,
                pwResetToken: crypto
                  .createHash("sha256")
                  .update(body.username)
                  .digest("hex")
              },
              EMAIL_SECRET,
              {
                expiresIn: 36000 //1h
              },
              (err, pwResetToken) => {
                const url = `http://localhost:3000/passwordchange/${pwResetToken}`;
                transporter.sendMail({
                  from: "no.reply.sealle@gmail.com",
                  to: body.email,
                  subject: "Password Reset",
                  html: `Please click on the link to reset your password: <br/><a href="${url}">${url}</a>`
                });
              }
            );
            setTimeout(function() {
              res.status(200).json({
                success: true
              });
            }, 3000);
          } else {
            res
              .status(400)
              .json({ message: "Username and Email do not match!" });
          }
        }
      });
    });

    //change password
    server.post("/changepw", (req, response) => {
      let searchSQL = SqlString.format(
        "SELECT * FROM users WHERE username =?",
        [req.body.username]
      );
      database.connection.query(searchSQL, (err, result) => {
        if (result.length) {
          bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, null, function(err, hash) {
              let updatePw = SqlString.format(
                "UPDATE users SET password=? WHERE username=?",
                [hash, req.body.username]
              );
              database.connection.query(updatePw, (err, res) => {
                if (err) {
                  console.log(err);
                  response.status(400).json({
                    message: "Database Server is not connected!"
                  });
                } else {
                  response.status(200).json({
                    success: true
                  });
                }
              });
            });
          });
        } else {
          console.log("Error /changepw");
        }
      });
    });

    //Verify password reset link
    server.get("/passwordchange/:id", (req, res, next) => {
      try {
        jwt.verify(req.params.id, EMAIL_SECRET, (err, decoded) => {
          if (err) {
            response.redirect("/login");
          } else {
            next();
          }
        });
      } catch (e) {
        console.log(e);
      }
    });

    //Get current user
    server.post("/currentuser", urlEncodedParser, function(req, response) {
      let cookie = req.cookies["x-access-token"];
      let decoded = jwtDecode(cookie);
      let currentUser = decoded.username;
      let token = decoded.xsrfToken;
      response.status(200).json({
        success: true,
        currentUser: currentUser,
        token: token,
        cookie: cookie
      });
    });

    //Gets data of a user
    server.post("/users", urlEncodedParser, function(req, response) {
      let cookie = req.cookies["x-access-token"];
      let decoded = jwtDecode(cookie);
      let currentUser = decoded.username;
      let searchUser = SqlString.format(
        "SELECT * FROM users WHERE username=?",
        [currentUser]
      );
      database.connection.query(searchUser, function(err, res, fields) {
        if (err) throw err;
        response.status(200).send({
          success: true,
          userData: res,
          pic1: res[0].ID1,
          pic2: res[0].ID2,
          doc1: res[0].doc1,
          doc2: res[0].doc2,
          isComp: res[0].isComp
        });
      });
    });

    //receive changed data from users in profile page
    server.post("/editData", urlEncodedParser, function(req, response) {
      let body = req.body;
      let now = date.format(new Date(), "DD.MM.YY");

      let editAddress = SqlString.format(
        "UPDATE users SET street=?, houseNr=?, postCode=?, placeOfRes=?, edited=?, lastModified=? WHERE username=?",
        [
          body.street,
          body.houseNr,
          body.postCode,
          body.placeOfRes,
          "address",
          now,
          body.username
        ]
      );

      let editEmail = SqlString.format(
        "UPDATE users SET email=?, edited=?, lastModified=? WHERE username=?",
        [body.email, "email", now, body.userName]
      );

      let editMobile = SqlString.format(
        "UPDATE users SET mobNr=?, edited=?, lastModified=? WHERE username=?",
        [body.mobNr, "mobNr", now, body.userName]
      );

      let editCompName = SqlString.format(
        "UPDATE users SET compName=?, edited=?, lastModified=? WHERE username=?",
        [body.compName, "compName", now, body.userName]
      );

      let editCompAddress = SqlString.format(
        "UPDATE users SET businessAd=?, compHouseNr=?, compPostCode=?, residence=?, edited=?, lastModified=? WHERE username=?",
        [
          body.businessAd,
          body.compHouseNr,
          body.compPostCode,
          body.residence,
          "compAddress",
          now,
          body.username
        ]
      );
      if (body.street !== undefined) {
        database.connection.query(editAddress, function(err, res, fields) {
          if (err) throw err;
          response.status(200).json({ success: true });
        });
      } else if (body.email !== undefined) {
        database.connection.query(editEmail, function(err, res, fields) {
          if (err) throw err;
          response.status(200).json({ success: true });
        });
      } else if (body.mobNr !== undefined) {
        database.connection.query(editMobile, function(err, res, fields) {
          if (err) throw err;
          response.status(200).json({ success: true });
        });
      } else if (body.compName !== undefined) {
        database.connection.query(editCompName, function(err, res, fields) {
          if (err) throw err;
          response.status(200).json({ success: true });
        });
      } else if (body.businessAd !== undefined) {
        database.connection.query(editCompAddress, function(err, res, fields) {
          if (err) throw err;
          response.status(200).json({ success: true });
        });
      }
    });

    server.post("/changeEdit", urlEncodedParser, function(req, response) {
      let userName = req.body.userName;
      let changeEdited = SqlString.format(
        "UPDATE users SET edited=? WHERE username=?",
        [null, userName]
      );
      database.connection.query(changeEdited, function(err, res, fields) {
        if (err) throw err;
        response.status(200).json({ success: true });
      });
    });

    //Gets list of users from Client
    server.post("/usrs", urlEncodedParser, function(req, response) {
      let currentUser = req.body.currentUser;
      let join = SqlString.format(
        "SELECT DISTINCT * FROM users LEFT JOIN ethAddresses ON users.kycKey = ethAddresses.kycKey WHERE username=?",
        [currentUser]
      );
      database.connection.query(join, function(err, res, fields) {
        if (err) {
          throw err;
        } else {
          response.status(200).send({
            success: true,
            userData: res,
            pic1: res[0].ID1,
            pic2: res[0].ID2,
            doc1: res[0].doc1,
            doc2: res[0].doc2,
            isComp: res[0].isComp
          });
        }
      });
    });

    //Store kycKey into db
    // server.post("/approval", urlEncodedParser, function(req, response) {
    //   let body = req.body;
    //   let storekycKeyUsers = SqlString.format(
    //     "UPDATE users SET kycKey=?, isRegistered=? WHERE username=?",
    //     [body.newKycKey, "yes", body.userName]
    //   );
    //   let storeKeyEthAddresses = SqlString.format(
    //     "INSERT INTO ethAddresses SET kycKey=?, ethAddress=?",
    //     [body.newKycKey, null]
    //   );
    //   database.connection.query(storekycKeyUsers, function(err, res, fields) {
    //     if (err) {
    //       throw err;
    //     } else {
    //       database.connection.query(storeKeyEthAddresses, function(
    //         err,
    //         res,
    //         fields
    //       ) {
    //         if (err) {
    //           throw err;
    //         } else {
    //           response.status(200).json({
    //             success: true
    //           });
    //         }
    //       });
    //     }
    //   });
    // });

    //create OTP
    server.post("/createOTP", urlEncodedParser, (req, response) => {
      let body = req.body;
      let userName = body.userName;
      let otpSecret = body.otpSecret;
      let searchEmail = SqlString.format(
        "SELECT email FROM users WHERE username=?",
        [userName]
      );
      let insertOtpSecret = SqlString.format(
        "UPDATE users SET otpSecret=? WHERE username=?",
        [otpSecret, userName]
      );
      database.connection.query(searchEmail, function(err, res) {
        if (err) {
          throw err;
        } else {
          transporter.sendMail({
            from: "no.reply.sealle@gmail.com",
            to: res[0].email,
            subject: "OTP",
            html: `Your OTP: ${body.token}`
          });
          if (err) {
            console.log(err);
          } else {
            database.connection.query(insertOtpSecret, function(err, res) {
              if (err) {
                throw err;
              } else {
                response.status(200).json({ success: true });
              }
            });
          }
        }
      });
    });

    server.post("/otpSecret", urlEncodedParser, (req, response) => {
      let getOtpSecret = SqlString.format(
        "SELECT otpSecret FROM users WHERE otpSecret IS NOT NULL"
      );
      database.connection.query(getOtpSecret, (err, res) => {
        if (err) {
          throw err;
        } else {
          response
            .status(200)
            .json({ success: true, otpSecret: res[0].otpSecret });
        }
      });
    });

    // when approved, store kycKey in db
    server.post("/approval", urlEncodedParser, (req, response) => {
      let newAccount = web3.eth.accounts.create();
      let newKycKey = newAccount.address;
      let body = req.body;
      let storekycKeyUsers = SqlString.format(
        "UPDATE users SET kycKey=?, isRegistered=? WHERE otpSecret IS NOT NULL; UPDATE users SET otpSecret=? WHERE otpSecret IS NOT NULL",
        [newKycKey, "yes", null]
      );
      let storeEthAddresses = SqlString.format(
        "INSERT INTO ethAddresses SET kycKey=?, ethAddress=?",
        [newKycKey, null]
      );
      database.connection.query(storekycKeyUsers, function(err, res, fields) {
        if (err) {
          throw err;
        } else {
          database.connection.query(storeEthAddresses, function(
            err,
            res,
            fields
          ) {
            if (err) {
              throw err;
            } else {
              response.status(200).json({
                success: true
              });
            }
          });
        }
      });
    });

    server.post("/decline", urlEncodedParser, function(req, response) {
      let body = req.body;
      console.log(body.userName);
      let storekycKey = SqlString.format(
        "UPDATE users SET kycKey=?, isRegistered=? WHERE username=?",
        ["declined", "yes", body.userName]
      );
      database.connection.query(storekycKey, function(err, res, fields) {
        if (err) throw err;
        response.status(200).json({
          success: true,
          returnHome: true
        });
      });
    });

    //User list
    server.post("/userlist", function(req, response) {
      let sql = "SELECT * FROM users";
      database.connection.query(sql, function(err, res, fields) {
        if (err) throw err;
        response.status(200).json({
          success: true,
          userData: res
        });
      });
    });

    server.post("/assets", urlEncodedParser, function(req, response) {
      let body = req.body;
      let cookie = req.cookies["x-access-token"];
      let decoded = jwtDecode(cookie);
      let userName = decoded.username;
      let insertFirst = SqlString.format(
        "INSERT INTO beneficialOwners SET username=?, ownerName=?, ownerLastName=?, ownerStreet=?, ownerHouseNr=?, ownerPostCode=?, ownerPlaceOfRes=?, ownerDateOfBirth=?",
        [
          userName,
          body.ownerFname,
          body.ownerLname,
          body.ownerStreet,
          body.ownerHouseNr,
          body.ownerPostCode,
          body.ownerPlaceOfRes,
          body.ownerDateOfBirth
        ]
      );
      let insertSecond = SqlString.format(
        "INSERT INTO beneficialOwners SET username=?, ownerName=?, ownerLastName=?, ownerStreet=?, ownerHouseNr=?, ownerPostCode=?, ownerPlaceOfRes=?, ownerDateOfBirth=?",
        [
          userName,
          body.ownerFname2,
          body.ownerLname2,
          body.ownerStreet2,
          body.ownerHouseNr2,
          body.ownerPostCode2,
          body.ownerPlaceOfRes2,
          body.ownerDateOfBirth2
        ]
      );
      let insertThird = SqlString.format(
        "INSERT INTO beneficialOwners SET username=?, ownerName=?, ownerLastName=?, ownerStreet=?, ownerHouseNr=?, ownerPostCode=?, ownerPlaceOfRes=?, ownerDateOfBirth=?",
        [
          userName,
          body.ownerFname3,
          body.ownerLname3,
          body.ownerStreet3,
          body.ownerHouseNr3,
          body.ownerPostCode3,
          body.ownerPlaceOfRes3,
          body.ownerDateOfBirth3
        ]
      );
      database.connection.query(insertFirst, function(err, res, fields) {
        if (err) {
          console.log(err);
        } else {
          if (body.ownerFname2) {
            database.connection.query(insertSecond, function(err, res, fields) {
              if (err) {
                console.log(err);
              } else {
                if (body.ownerFname3) {
                  database.connection.query(insertThird, function(
                    err,
                    res,
                    fields
                  ) {
                    if (err) {
                      console.log(err);
                    } else {
                    }
                  });
                }
              }
            });
          }
          response.status(200).json({
            success: true
          });
        }
      });
    });

    server.post("/clickandpay", urlEncodedParser, function(req, response) {
      let cookie = req.cookies["x-access-token"];
      let decoded = jwtDecode(cookie);
      let videoCookie = jwt.sign(
        {
          username: decoded.username,
          role: 0, //user
          reg: 0, //registered
          paid: 1,
          xsrfToken: crypto
            .createHash("sha256")
            .update(decoded.username)
            .digest("hex")
        },
        secret,
        {
          expiresIn: 36000 //1h
        }
      );
      response.status(200).json({
        success: true,
        videoCookie: videoCookie
      });
    });

    //protects pages from unauthorized users
    server.use(
      unless(
        ["/login", "/register", "/_next", "/passwordreset", "/passwordchange"],
        (req, res, next) => {
          const token = req.cookies["x-access-token"];
          if (token) {
            jwt.verify(token, secret, (err, decoded) => {
              if (err) {
                console.log(err);
                res.redirect("/login"); //TODO:profile page lands here when refreshing: token expired
              } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
              }
            });
          } else {
            res.redirect("/login");
          }
        }
      )
    );

    server.get("/", (req, res) => {
      res.redirect("/login");
    });

    //Protect Admin page
    server.get("/admin", protectedAdminPage, (req, response, next) => {
      return next();
    });

    //Protect clickandpay
    server.get("/clickandpay", protectedRegPage, (req, response, next) => {
      return next();
    });

    server.get("/videochat", protectedVideochatPage, (req, response, next) => {
      return next;
    });

    //Protect profile view
    server.get("/profile", protectedUserPage, (req, response, next) => {
      return next();
    });

    //User details for videochat
    server.post("/videochat/stream", urlEncodedParser, (req, res) => {
      let cookie = req.cookies["x-access-token"];
      let decoded = jwtDecode(cookie);
      let currentUser = decoded.username;
      let token = decoded.xsrfToken;
      let role = decoded.role;
      res.status(200).send({
        currentUser,
        token: token,
        role: role
      });
    });

    // server.post("/pusher/count", (req, res) => {
    //   let newConnect = req.body.newConnect;
    //   console.log(newConnect);
    //   server.post("/pusher/members", (req, res) => {
    //     res.status(200).json({
    //       success: true,
    //       newConnect: newConnect
    //     });
    //   });
    // }); //TODO: fix

    // pusher.get(
    //   {
    //     path: "/apps/601383/channels/presence-video-channel",
    //     params: {}
    //   },
    //   function(error, request, response) {
    //     if (response.statusCode === 200) {
    //       var result = JSON.parse(response.body);
    //       var channelsInfo = result.channels;
    //       console.log(channelsInfo);
    //     }
    //   }
    // );

    // let response = pusher.get("https://endpoint.com/webhook15873");
    // console.log(response);

    //Pusher endpoint used to authenticate users
    server.post("/pusher/auth", urlEncodedParser, function(req, res) {
      let cookie = req.cookies["x-access-token"];
      let decoded = jwtDecode(cookie);
      let currentUser = decoded.username;
      let socketId = req.body.socket_id;
      let channel = req.body.channel_name;
      let presenceData = {
        user_id: currentUser
      };

      let auth = pusher.authenticate(socketId, channel, presenceData);
      res.send(auth);
    });

    //process user requests from external plattforms
    server.post("/verify", urlEncodedParser, function(req, response) {
      let body = req.body;
      let checkKycKey = SqlString.format("SELECT * FROM users WHERE kycKey=?", [
        body.kycKey
      ]);
      database.connection.query(checkKycKey, function(err, result, fields) {
        if (err) {
          console.log("error");
        } else {
          if (result.length) {
            response.status(200).json({
              confirmed: true,
              success: true
            });
            //insert into ethAddresses
            let storeAddress = SqlString.format(
              "INSERT INTO ethAddresses SET kycKey=?, ethAddress=?",
              [body.kycKey, body.platformAddress]
            );
            database.connection.query(storeAddress, function(
              err,
              result,
              fields
            ) {
              if (err) {
                throw err;
              } else {
                console.log("address saved in db");
              }
            });
          } else {
            if (!result.length) {
              response.status(200).json({
                success: true,
                confirmed: false
              });
              console.log("wrong kycKey");
            }
          }
        }
      });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    //listen on port 3000
    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Listening on Port 3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

// function to protect all pages
function unless(paths, middleware) {
  return function(req, res, next) {
    let isHave = false;
    paths.forEach(path => {
      if (path === req.path || req.path.includes(path)) {
        isHave = true;
        return;
      }
    });
    if (isHave) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
}

//protect admin page
function protectedAdminPage(req, res, next) {
  const token = req.cookies["x-access-token"];
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.log(err);
      } else {
        if (decoded.role !== 1) {
          res.redirect("/error");
        } else {
          return next();
        }
      }
    });
  } else {
    res.redirect("/login");
  }
}

//protect user page
function protectedUserPage(req, res, next) {
  const token = req.cookies["x-access-token"];
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.log(err);
      } else {
        if (decoded.role !== 0 || decoded.reg !== 1) {
          res.redirect("/error");
        } else {
          return next();
        }
      }
    });
  } else {
    res.redirect("/login");
  }
}

//protect registration page
function protectedRegPage(req, res, next) {
  const token = req.cookies["x-access-token"];
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.log(err);
      } else {
        if (decoded.role !== 0 || decoded.reg !== 0) {
          res.redirect("/error");
        } else {
          return next();
        }
      }
    });
  } else {
    res.redirect("/login");
  }
}

function protectedVideochatPage(req, res, next) {
  const token = req.cookies["x-access-token"];
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.log(err);
      } else {
        if (decoded.role !== 0 || decoded.reg !== 0) {
          res.redirect("/error");
        } else if (decoded.paid === 0) {
          res.redirect("/clickandpay");
        } else {
          return next();
        }
      }
    });
  } else {
    res.redirect("/login");
  }
}
