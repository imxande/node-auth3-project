// import express
const express = require('express');

// import helmet
const helmet = require('helmet');

// import cors
const cors = require('cors');

// invoking express to create server
const server = express();

// importing users router here
const usersRouter = require('../users/users-router.js');

// adding helmet to the server
server.use(helmet());

// teaching how to read json
server.use(express.json());

// adding cors to server
server.use(cors());

// end point for users here
server.use('/api/users', usersRouter);

// checking for a request here to see if everything is working
server.get('/', (req, res) =>{
    res.send('Hello from the server!');
})

module.exports = server;