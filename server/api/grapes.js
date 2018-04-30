const router = require("express").Router();
module.exports = router;
const { Grapes, Region } = require("../db/models");

router.use("/:id", (req, res, next) => {
  Grapes.findById(req.params.id, { include: [{ model: Region, as: 'regions' }] })
    .then(foundGrape => res.json(foundGrape))
    .catch(next);
});

router.use("/", (req, res, next) => {
  Grapes.findAll({ include: [{ model: Region, as: 'regions' }] })
    .then(grapes => res.json(grapes))
    .catch(next);
});
