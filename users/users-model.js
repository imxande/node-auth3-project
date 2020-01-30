// import db config here
const db = require('../database/dbConfig.js');

// created methods here
module.exports = {
    find,
    add,
    findBy,
    findById
}

// function find implementation
function find(){
    return db('users').select('id', 'username', 'password');
}

// add method implementation
async function add(user) {
    const [id] = await db('users').insert(user);
  
    return findById(id);
  }

  // findby implementation
  function findBy(filter) {
    return db('users').where(filter);
  }

  // find by id implementation
  function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }