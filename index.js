// import server
const server = require('./api/server.js');

// checking for port here and assigning it to port variable
const port = process.env.PORT || 8000;

// server is listening here
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));