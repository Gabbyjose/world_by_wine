const router = require("express").Router();
module.exports = router;
const { Country, Region } = require("../db/models");

router.use("/:id", (req, res, next) => {
  Country.findById(req.params.id)
    .then(foundCountry => res.json(foundCountry))
    .catch(next);
});

router.use("/", (req, res, next) => {
  Country.findAll({
    include: [{ model: Region }]
  })
    .then(countries => res.json(countries))
    .catch(next);
});
