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
// const https = require("https");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const secret = "iliketurtles";
const EMAIL_SECRET = "yello15873";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "no.reply.sealle@gmail.com",
    pass: "iLikeTurtles"
  }
});

const pusher = new Pusher({
  appId: "601383",
  key: "0f924dcd44dc93a88aa7",
  secret: "2d7e81c42956ced982b5",
  cluster: "eu",
  encrypted: true
});

const express = require("express");

// const certOptions = {
//   key: fs.readFileSync(path.resolve("cert/server.key")),
//   cert: fs.readFileSync(path.resolve("cert/server.crt"))
// };

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.text());
    server.use(bodyParser.json());

    server.use(cors());

    server.use(cookieParser());
    server.use(fileUpload());
    //server.use(express.static(path.join(__dirname, "/public")));

    server.post("/register", urlEncodedParser, (req, response) => {
      let image = req.files.file1;
      let image2 = req.files.file2;

      let imageName = `${req.body.username}-${image.name}`;
      let imageName2 = `${req.body.username}-${image2.name}`;

      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, null, function(err, hash) {
          let date = new Date();
          let body = req.body;

          jwt.sign(
            {
              username: body.username,
              emailToken: crypto
                .createHash("md5")
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

          //TODO:prevent sql injection by escaping user input (database.connection.escape(req.body.*userInput*)
          let sql =
            "INSERT INTO users(username, password, fname, lname, street, houseNr, postCode, placeOfRes, dateOfBirth, nat, email, mobNr, ID1, ID2, regDate, isComp) VALUES ('" +
            body.username +
            "', '" +
            hash +
            "', '" +
            body.fname +
            "', '" +
            body.lname +
            "', '" +
            body.street +
            "', '" +
            body.houseNr +
            "', '" +
            body.postCode +
            "', '" +
            body.placeOfRes +
            "', '" +
            body.dateOfBirth +
            "', '" +
            body.nat +
            "', '" +
            body.email +
            "', '" +
            body.mobNr +
            "', '" +
            imageName +
            "', '" +
            imageName2 +
            "', '" +
            date +
            "', '" +
            0 +
            "')";
          let searchSQL =
            "SELECT * FROM users WHERE username='" + body.username + "'";
          let searchEmail =
            "SELECT * FROM users WHERE email='" + body.email + "'";
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
                database.connection.query(sql, function(err, result) {
                  if (err) {
                    response.status(400).json({
                      message: "Database Server is not connected!"
                    });
                  } else {
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

    server.post("/companyregister", urlEncodedParser, function(req, response) {
      let image = req.files.file1;
      let image2 = req.files.file2;
      let doc = req.files.doc1;
      let doc2 = req.files.doc2;

      let imageName = `${req.body.username}-${image.name}`;
      let imageName2 = `${req.body.username}-${image2.name}`;
      let docName = `${req.body.compName}-${doc.name}`;
      let docName2 = `${req.body.compName}-${doc2.name}`;

      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, null, function(err, hash) {
          let date = new Date();
          let body = req.body;

          //TODO:prevent sql injection by escaping user input (database.connection.escape(req.body.*userInput*)

          jwt.sign(
            {
              username: body.username,
              emailToken: crypto
                .createHash("md5")
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

          let sql =
            "INSERT INTO users(username, password, fname, lname, street, houseNr, postCode, placeOfRes, dateOfBirth, nat, email, mobNr, ID1, ID2, regDate, compName, regNr, placeOfReg, residence, businessAd, compHouseNr, doc1, doc2, isComp) VALUES ('" +
            body.username +
            "', '" +
            hash +
            "', '" +
            body.fname +
            "', '" +
            body.lname +
            "', '" +
            body.street +
            "', '" +
            body.houseNr +
            "', '" +
            body.postCode +
            "', '" +
            body.placeOfRes +
            "', '" +
            body.dateOfBirth +
            "', '" +
            body.nat +
            "', '" +
            body.email +
            "', '" +
            body.mobNr +
            "', '" +
            imageName +
            "', '" +
            imageName2 +
            "', '" +
            date +
            "', '" +
            body.compName +
            "', '" +
            body.regNr +
            "', '" +
            body.placeOfReg +
            "', '" +
            body.residence +
            "', '" +
            body.businessAd +
            "', '" +
            body.compHouseNr +
            "', '" +
            docName +
            "', '" +
            docName2 +
            "', '" +
            1 +
            "')";
          let searchSQL =
            "SELECT * FROM users WHERE username='" + body.username + "'";
          let searchEmail =
            "SELECT * FROM users WHERE email='" + body.email + "'";
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
                database.connection.query(sql, function(err, result) {
                  if (err) {
                    response.status(400).json({
                      message: "Database Server is not connected!"
                    });
                  } else {
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

    server.post("/authenticate", (req, response) => {
      let body = req.body; //TODO: prevent SQL injection!
      let sql = "SELECT * FROM users WHERE username= '" + body.username + "'";
      database.connection.query(sql, function(err, result, fields) {
        if (err) {
          response
            .status(400)
            .json({ message: "Database Server is not connected!" });
        } else if(!result.length) {
          response
            .status(400)
            .json({ message: "Please register to login!" });
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
                        .createHash("md5")
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
                  result[0].isRegistered == "yes"
                ) {
                  let userToken = jwt.sign(
                    {
                      username: body.username,
                      role: 0, //user
                      reg: 1, //registered
                      xsrfToken: crypto
                        .createHash("md5")
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
                } else {
                  let registerToken = jwt.sign(
                    {
                      username: body.username,
                      role: 0,
                      reg: 0,
                      xsrfToken: crypto
                        .createHash("md5")
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

    server.get("/activate/:token", urlEncodedParser, (req, response) => {
      try {
        jwt.verify(req.params.token, EMAIL_SECRET, async (err, decoded) => {
          if (err) {
            console.log("error");
          } else {
            let username = decoded.username;
            let sql =
              "UPDATE users SET active='1' WHERE username='" + username + "'";
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

    //enter email to receive email
    server.post("/passwordreset", async (req, res) => {
      let body = req.body;
      let sql = "SELECT * FROM users WHERE username= '" + body.username + "'";
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
                  .createHash("md5")
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
      let searchSQL =
        "SELECT * FROM users WHERE username = '" + req.body.username + "'";
      database.connection.query(searchSQL, (err, result) => {
        if (result.length) {
          bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, null, function(err, hash) {
              let sql =
                "UPDATE users SET password = '" +
                hash +
                "' WHERE username='" +
                req.body.username +
                "'";
              database.connection.query(sql, (err, res) => {
                if (err) {
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

    server.get("/passwordchange/:id", (req, res, next) => {
      try {
        jwt.verify(req.params.id, EMAIL_SECRET, (err, decoded) => {
          if (err) {
            console.log("error");
          } else {
            next();
          }
        });
      } catch (e) {
        console.log(e);
      }
    });

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

    server.post("/users", urlEncodedParser, function(req, response) {
      //TODO:prevent SQL injection
      let cookie = req.cookies["x-access-token"];
      let decoded = jwtDecode(cookie);
      let currentUser = decoded.username;
      let sql = "SELECT * FROM users WHERE username = '" + currentUser + "'";
      database.connection.query(sql, function(err, res, fields) {
        if (err) throw err;
        response.setHeader("Content-Type", "application/pdf");
        response.setHeader(
          "Content-Disposition",
          `attachment; filename=${res[0].doc1}`
        );
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

    server.post("/usrs", urlEncodedParser, function(req, response) {
      let currentUser = req.body.currentUser; //TODO:prevent SQL injection
      let sql = "SELECT * FROM users WHERE username = '" + currentUser + "'";
      database.connection.query(sql, function(err, res, fields) {
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

    server.post("/hash", urlEncodedParser, function(req, response) {
      let currentUser = req.body.currentUser; //TODO:prevent SQL injection
      let sql = "SELECT * FROM users WHERE username = '" + currentUser + "'";
      database.connection.query(sql, function(err, res, fields) {
        if (err) throw err;
        let data = JSON.stringify(res[0]);
        let hash = crypto
          .createHash("sha256")
          .update(data)
          .digest("hex");
        console.log("0x" + hash);
        let hashPref = `0x${hash}`;
        console.log(hashPref);
        let sqlInsert =
          "UPDATE users SET hash ='" +
          hashPref +
          "', isRegistered = 'yes' WHERE username = '" +
          currentUser +
          "'";
        database.connection.query(sqlInsert, function(err, res, fields) {
          if (err) throw err;
          console.log("hash saved and changed isRegistered to yes");
          response.status(200).json({
            success: true,
            hash: hashPref
          });
        });
      });
    });

    server.post("/deleteuser", urlEncodedParser, function(req, response) {
      let currentUser = req.body.currentUser;
      let sql = "DELETE FROM users WHERE username = '" + currentUser + "'";
      database.connection.query(sql, function(err, res, fields) {
        if (err) throw err;
        response.status(200).json({
          success: true,
          message: "User deleted!"
        });
      });
    });

    server.post("/makeadmin", urlEncodedParser, function(req, response) {
      let currentUser = req.body.currentUser;
      let sql =
        "UPDATE users SET privileges='admin' WHERE username='" +
        currentUser +
        "'";
      database.connection.query(sql, function(err, res, fields) {
        if (err) throw err;
        response.status(200).json({
          success: true,
          message: "you have promoted this user to administrator"
        });
      });
    });

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

    server.get("/admin", protectedAdminPage, (req, response, next) => {
      return next();
    });

    server.get(
      ["/terms", "/videochat"],
      protectedRegPage,
      (req, response, next) => {
        return next();
      }
    );

    server.get("/profile", protectedUserPage, (req, response, next) => {
      return next();
    });

    server.post("/api/preventCRSF", (req, res, next) => {
      if (req.decoded.xsrfToken === req.get("X-XSRF-TOKEN")) {
        res.status(200).json({
          success: true,
          message: "Yes, this api is protected by CRSF attack"
        });
      } else {
        res.status(400).json({
          success: false,
          message: "CRSF attack is useless"
        });
      }
    });

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

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    // https.createServer(certOptions, server).listen(3000, certOptions, err => {
    //   if (err) throw err;
    //   console.log("Listening on Port 3000");
    // });
    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Listening on Port 3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

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
