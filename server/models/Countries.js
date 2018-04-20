const db = require("../db.js");
const Sequelize = require("sequelize");

const Countries = db.define("country", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mapName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Countries;
