// import express
const express = require('express');

// import helmet
const helmet = require('helmet');

// import cors
const cors = require('cors');

// invoking express to create server
const server = express();

// adding helmet to the server
server.use(helmet());

// teaching how to read json
server.use(express.json());

// adding cors to server
server.use(cors());

// checking for a request here to see if everything is working
server.get('/', (req, res) =>{
    res.send('Hello from the server!');
})

module.exports = server;