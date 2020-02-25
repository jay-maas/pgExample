const db = require('../data/dbConfig.js')

module.exports = {
    addLike,
    findLikes,
    searchLikesByCommentId,
    findLikesById,
    findLikesByFilter,
    removeLikes,
    updateLikes
  };
  
  function findLikes() {
    return db('likes')
  }
  
  function findLikesById(id) {
    return db('likes')
      .where({ id })
      .first()
  }

  function searchLikesByCommentId(comment_id) {
      return db('likes').where("comment_id", comment_id)
  }
  
  function findLikesByFilter(filter) {
    return db('likes').where({ filter })
  }
  
  async function addLike(like) {
    const [id] = await db('likes').insert(like).returning('id');
  
    return findLikesById(id);
  }
  
  function updateLikes(id, changes) {
    return db('likes')
    .where({ id })
    .update(changes, '*')
    .returning('id')
  }
  
  function removeLikes(id) {
    return db('likes')
    .where({ id })
    .del();
  }
  