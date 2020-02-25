exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('comments')
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex('comments').insert([

            {
                comment: "We are learning so much!"
            }

        ]);
    });
};
