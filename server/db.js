const Sequelize = require("sequelize");

const db = new Sequelize("postgress://localhost:5432/worldByWine", {
  logging: false
});

module.exports = db;
