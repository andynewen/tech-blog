// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// when deployed on Heroku
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
    
}
module.exports = sequelize;