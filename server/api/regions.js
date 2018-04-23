const { Region } = require("../db/models");
const router = require("express").Router();
module.exports = router;

router.use("/:id", (req, res, next) => {
  Region.findById(req.params.id)
    .then(foundRegion => res.json(foundRegion))
    .catch(next);
});

router.use("/", (req, res, next) => {
  Region.findAll()
    .then(regions => res.json(regions))
    .catch(next);
});
