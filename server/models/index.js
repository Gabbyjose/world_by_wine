const Grapes = require("./Grapes.js");
const Regions = require("./Regions.js");
const Countries = require("./Countries.js");

Regions.belongTo(Countries);
Countries.hasMany(Regions);

Grapes.belongsToMany(Regions);
Regions.hasMany(Grapes);

module.exports = { Grapes, Regions, Countries };
