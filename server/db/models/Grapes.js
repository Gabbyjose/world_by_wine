const Sequelize = require("sequelize");
const db = require("../db.js");

const Grapes = db.define("grape", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  flavors: {
    type: Sequelize.STRING
  }
});

module.exports = Grapes;
