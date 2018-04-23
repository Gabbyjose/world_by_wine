const router = require("express").Router();
module.exports = router;
const { Grapes } = require("../db/models");

router.use("/:id", (req, res, next) => {
  Grapes.findById(req.params.id)
    .then(foundGrape => res.json(foundGrape))
    .catch(next);
});

router.use("/", (req, res, next) => {
  Grapes.findAll()
    .then(grapes => res.json(grapes))
    .catch(next);
});
