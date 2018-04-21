const Grapes = require("./Grapes.js");
const Region = require("./Region.js");
const Country = require("./Country.js");

Region.belongsTo(Country);
Country.hasMany(Region);

Grapes.belongsToMany(Region, { through: "GrapeRegions" });
Region.hasMany(Grapes);

module.exports = { Grapes, Region, Country };
