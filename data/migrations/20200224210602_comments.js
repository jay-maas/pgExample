
exports.up = function(knex) {
    return knex.schema
    .createTable('comments', comment => {
        comment.increments()

        comment.string('comment').notNullable()

    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('comments')
};
