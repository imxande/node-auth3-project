// import db config here
const db = require('../database/dbConfig.js');

// created methods here
module.exports = {
    find
}

// function find implementation
function find(){
    return db('users').select('id', 'username', 'password');
}
