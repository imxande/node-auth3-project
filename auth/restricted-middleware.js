// importing jsonwebtoken
const jwt = require('jsonwebtoken');

// distructuring jwtSecret
const { jwtSecret} = require('../config/secrests.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
  
    if(token) {
      jwt.verify(token, jwtSecret, (err) => {
        if(err) {
          // the token is not valid
          res.status(401).json({ you: "can't do this!"})
        } else {
          next();
        }
      })
    } else {
      res.status(401).json({ you: 'Invalid credentials!'})
    }
  };
  