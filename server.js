const express = require('express')

const {
    addComment,
    findComments,
    findCommentById,
    findCommentByFilter,
    removeComment,
    updateComment
} = require('./models/comments-model.js')

const server = express()

server.get('/', (req, res) => {
    res.status(200).send(`
      <div>
        <h1>Welcome to the PG Example</h1>
        <h2>Server Running...</h2>
      </div>`);
  });

server.get('/comments', (req, res) => {
    findComments()
    .then(comment => {
        console.log(comment, 'got the comments')
        res.status(200).json(comment)
    })
    .catch(err => {
        console.log(err, 'error!')
        res.status(500).json({ error: "Unable to retrieve comments!"})
    })
})

module.exports = server