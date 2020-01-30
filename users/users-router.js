// import express
const express = require('express');

// import user model
const Users = require('./users-model.js');

// using express to create a router
const router = express.Router();

// handles get request
router.get('/', (req, res) =>{
    Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router; 