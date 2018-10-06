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
//const https = require('https');
const cors = require("cors");
const fileUpload = require("express-fileupload");

const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const secret = "iliketurtles";

//app.use(fileUpload());

const express = require("express");

/*const certOptions = {
    key: fs.readFileSync(path.resolve('cert/server.key')),
    cert: fs.readFileSync(path.resolve('cert/server.crt'))
}*/

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

    server.post("/register", urlEncodedParser, function(req, response) {
      let image = req.files.file1;
      let image2 = req.files.file2;

      let imageName = image.name;
      let imageName2 = image2.name;

      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, null, function(err, hash) {
          image.mv("static/" + image.name, function(err) {
            if (err) return response.status(500).send(err); //TODO: save AFTER success!!!
          });
          image2.mv("static/SebF" + image2.name, function(err) {
            //TODO: save AFTER success!!!
            if (err) return response.status(500).send(err);
          });
          let body = req.body;
          //TODO:prevent sql injection by escaping user input (database.connection.escape(req.body.*userInput*)
          //TODO:let date = new Date(); //wrong, insert timestamp!!
          //let currentDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay(); //wrong date, insert timestamp!!
          let sql =
            "INSERT INTO idTest(username, password, ID1, ID2, fname, lname) VALUES ('" +
            body.username +
            "', '" +
            hash +
            "', '" +
            imageName +
            "', '" +
            imageName2 +
            "')";
          let searchSQL =
            "SELECT * FROM idTest WHERE username='" + body.username + "'";
          database.connection.query(searchSQL, function(err, res) {
            if (err) {
              console.log("1.error");
            } else {
              if (res.length) {
                response.status(400).json({
                  success: false,
                  message: "Username already exists! Choose a different one."
                });
                console.log("User already exists");
              } else {
                database.connection.query(sql, function(err, result) {
                  if (err) {
                    console.log("2.error");
                  } else {
                    response.status(200).json({
                      success: true,
                      message: "successfully registered!"
                    });
                    console.log("1 record inserted");
                  }
                });
              }
            }
          });
        });
      });
    });

    server.post("/authenticate", (req, response) => {
      let body = req.body; //TODO: prevent SQL injection!
      let sql = "SELECT * FROM idTest WHERE username= '" + body.username + "'";
      database.connection.query(sql, function(err, res, fields) {
        if (err) {
          response
            .status(400)
            .json({ message: "Username or Password is not correct!" });
        } else {
          if (res.length) {
            bcrypt.compare(body.password, res[0].password, function(err, res) {
              if (res) {
                if (body.username == "Admin") {
                  let adminToken = jwt.sign(
                    {
                      username: body.username,
                      role: ["admin", "user"],
                      xsrfToken: crypto
                        .createHash("md5")
                        .update(body.username)
                        .digest("hex")
                    },
                    secret,
                    {
                      expiresIn: 60 * 60 //1h
                    }
                  );
                  response.status(200).json({
                    success: true,
                    message: "Enjoy your token",
                    adminToken: adminToken
                  });
                } else {
                  let token = jwt.sign(
                    {
                      username: body.username,
                      role: "user",
                      xsrfToken: crypto
                        .createHash("md5")
                        .update(body.username)
                        .digest("hex")
                    },
                    secret,
                    {
                      expiresIn: 60 * 60 //1h
                    }
                  );
                  response.status(200).json({
                    success: true,
                    message: "Enjoy your token",
                    token: token
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

    server.post("/users", urlEncodedParser, function(req, response) {
      let currentUser = req.body.currentUser; //TODO:prevent SQL injection
      let sql = "SELECT * FROM idTest WHERE username = '" + currentUser + "'";
      database.connection.query(sql, function(err, res, fields) {
        if (err) throw err;
        response.status(200).send({
          success: true,
          userData: res,
          pic1: res[0].ID1,
          pic2: res[0].ID2
        });
      });
    });

    server.post("/userlist", function(req, response) {
      let sql = "SELECT * FROM idTest";
      database.connection.query(sql, function(err, res, fields) {
        if (err) throw err;
        response.status(200).json({
          success: true,
          userData: res
        });
      });
    });

    server.use(
      unless(["/login", "/register", "/error", "/_next"], (req, res, next) => {
        const token = req.cookies["x-access-token"];
        if (token) {
          jwt.verify(token, secret, (err, decoded) => {
            if (err) {
              res.redirect("/login");
            } else {
              // if everything is good, save to request for use in other routes
              req.decoded = decoded;
              next();
            }
          });
        } else {
          res.redirect("/login");
        }
      })
    );

    server.post("/api/preventCRSF", (req, res, next) => {
      if (req.decoded.xsrfToken === req.get("X-XSRF-TOKEN")) {
        console.log(req.decoded.xsrfToken);
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

    server.post("/pusher/auth", urlEncodedParser, function(req, res) {
      let currentUser = req.decoded.username;
      let socketId = req.body.socket_id;
      let channel = req.body.channel_name;
      let presenceData = {
        user_id: currentUser
      };

      let pusher = new Pusher({
        appId: "601383",
        key: "0f924dcd44dc93a88aa7",
        secret: "2d7e81c42956ced982b5",
        cluster: "eu",
        encrypted: true
      });

      let auth = pusher.authenticate(socketId, channel, presenceData);
      res.send(auth);
    });

    server.get("/admin", function(req, response, next) {
      const token = req.cookies["x-access-token"];
      jwt.verify(token, secret, (err, decoded) => {
        if (decoded.role[0] == "admin") {
          return next();
        } else {
          /*response.status(400).json({
            success: false,
            message: "You are not entitled to see this page!"
          });*/
          response.redirect("/error");
        }
      });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    /*https.createServer(certOptions, server).listen(3000, certOptions, (err) => {
            if (err) throw err;
            console.log('Listening on Port 3000')
        })*/
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

/*function protectedPage(req, res, next) {
  const token = req.cookies["x-access-token"];
  jwt.verify(token, secret, (err, decoded) => {
    if (decoded.role[0] == "admin") {
      return next();
    } else {
      res.status(500).send({
        success: false,
        message: "You are not entitled to see this page!"
      });
    }
  });
}*/
