exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('likes')
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex('likes').insert([

            {
                name: "jay",
                comment_id: 1
            },
            {
                name: "jimmy",
                comment_id: 1
            },
            {
                name: "danica",
                comment_id: 1
            },
            {
                name: "daniel",
                comment_id: 1
            },
            {
                name: "vick",
                comment_id: 1
            },
            {
                name: "patrick",
                comment_id: 1
            },
            {
                name: "chris",
                comment_id: 1
            },
            {
                name: "chris",
                comment_id: 1
            },

        ]);
    });
};
