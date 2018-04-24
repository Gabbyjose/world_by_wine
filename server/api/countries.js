const router = require("express").Router();
module.exports = router;
const { Country, Region } = require("../db/models");

router.use("/:id", (req, res, next) => {
  Country.findById(req.params.id, {
    include: [{ model: Region }]
  })
    .then(foundCountry => res.json(foundCountry))
    .catch(next);
});

router.use('/:name', (req, res, next) => {
  Country.findOne({
    where:
      { name: req.params.name }
  }, {
      include: [{ model: Region }]
    })
    .then(foundCountry => res.json(foundCountry))
    .catch(next);
})

router.use("/", (req, res, next) => {
  Country.findAll({
    include: [{ model: Region }]
  })
    .then(countries => res.json(countries))
    .catch(next);
});
