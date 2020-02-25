
exports.up = function(knex) {
    return knex.schema
    .createTable('likes', like => {
        like.increments()

        like.string('name').notNullable()

        like.integer('comment_id').unsigned().notNullable().references('id').inTable('comments')

    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('likes')
};
