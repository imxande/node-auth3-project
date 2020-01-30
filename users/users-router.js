// import express
const express = require('express');

// import user model
const Users = require('./users-model.js');

// import restricted middleware
const restricted = require('../auth/restricted-middleware.js');

// using express to create a router
const router = express.Router();

// handles get request
router.get('/', restricted, (req, res) =>{
    Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router; 