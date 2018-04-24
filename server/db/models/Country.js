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
  },
  code: {
    type: Sequelize.STRING
  }
});

module.exports = Country;
