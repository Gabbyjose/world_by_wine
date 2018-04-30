const Grapes = require("./Grapes.js");
const Region = require("./Region.js");
const Country = require("./Country.js");

Region.belongsTo(Country);
Country.hasMany(Region);

Grapes.belongsToMany(Region, { as: 'regions', through: "GrapeRegions" });
Region.belongsToMany(Grapes, { as: 'grapes', through: "GrapeRegions" });

module.exports = { Grapes, Region, Country };
