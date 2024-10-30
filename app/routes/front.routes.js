const { authJwt } = require("../middleware");
const rootdirlen = __dirname.indexOf("app\\routes") -1;
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
      next();
    });
  
    app.get("/all", (req, res) => {
        res.status(200).sendFile(__dirname.substring(0,rootdirlen) + '/public/html/home.html');
      });
  
    app.get(
      "/user",
      
      (req, res) => {
        res.status(200).sendFile(__dirname.substring(0, rootdirlen) + '/public/html/user.html');
      }
    );
  
    app.get(
      "/mod",
      
      (req, res) => {
        res.status(200).sendFile(__dirname.substring(0, rootdirlen) + '/public/html/mod.html');
      }
    );
  
    app.get(
      "/admin",
      
      (req, res) => {
        res.status(200).sendFile(__dirname.substring(0, rootdirlen) + '/public/html/admin.html');
      }
    );

    app.get(
        "/signin",
        (req, res) => {
          res.status(200).sendFile(__dirname.substring(0, rootdirlen) + '/public/html/entry.html');
        }
      );

  };