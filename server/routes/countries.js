const router = require("express").Router();
module.exports = router;
const { Country } = require("../db/models");

router.use("/", (req, res, next) => {
  Country.findAll().then(countries => res.json(countries));
});
