require('dotenv').config();
require('dotenv').load();

var Sequelize = require('sequelize');
let db = null;

if(process.env.DATABASE_URL){
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
  });
  console.log('Connected to remote db');
} else {
  db = new Sequelize('rescue911', 'root', '', {
    host: 'localhost',
    dialect: 'psql'
  });
  console.log('connected to db locally');
}


module.exports = db;
