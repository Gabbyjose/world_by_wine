const db = require("../db.js");
const Sequelize = require("Sequelize");

const Region = db.define("region", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
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

module.exports = Region;
