const db = require("../db.js");
const Sequelize = require("sequelize");

const Country = db.define("country", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mapName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Country;
