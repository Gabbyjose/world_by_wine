const db = require("../db.js");
const Sequelize = require("Sequelize");

const Regions = db.define("region", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descripstion: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fameGrape: {
    type: Sequelize.STRING,
    allowNull: false
  },
  flavors: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quote: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING
  },
  value: {
    type: Sequelize.STRING
  }
});

module.exports = Regions;
