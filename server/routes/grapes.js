const router = require("express").Router();
module.exports = router;
const { Grapes } = require("../db/models");

router.use("/", (req, res, next) => {
  Grapes.findAll().then(grapes => res.json(grapes));
});
