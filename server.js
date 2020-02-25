const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.status(200).send(`
      <div>
        <h1>Welcome to the PG Example</h1>
        <h2>Server Running...</h2>
      </div>`);
  });

module.exports = server