const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const path = require("path");
module.exports = app;

const createApp = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", require("./api"));

  app.use(express.static(path.join(__dirname, "../", "public")));

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // sends index.html
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  app.listen(9090, () => console.log(`Mixing it up on port 9090`));
};

db
  .sync()
  .then(createApp)
  .then(startListening);
