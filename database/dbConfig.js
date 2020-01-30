// import knex
const knex = require('knex');

// import knexfile
const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);
