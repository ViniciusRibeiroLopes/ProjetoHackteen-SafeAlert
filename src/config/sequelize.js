// src/config/sequelize.js
const { Sequelize } = require('sequelize');
const dbConfig = require('./database').development;

const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
});

module.exports = sequelize;
