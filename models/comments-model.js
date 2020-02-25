const db = require('../data/dbConfig.js')

module.exports = {
    addComment,
    findComments,
    findCommentById,
    findCommentByFilter,
    removeComment,
    updateComment
  };
  
  function findComments() {
    return db('comments')
  }
  
  function findCommentById(id) {
    return db('comments')
      .where({ id })
      .first()
  }
  
  function findCommentByFilter(filter) {
    return db('comments').where({ filter })
  }
  
  async function addComment(comment) {
    const [id] = await db('comments').insert(comment).returning('id');
  
    return findCommentById(id);
  }
  
  function updateComment(id, changes) {
    return db('comments')
    .where({ id })
    .update(changes, '*')
    .returning('id')
  }
  
  function removeComment(id) {
    return db('comments')
    .where({ id })
    .del();
  }
  