const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/worldByWine", {
  logging: false
});

module.exports = db;
