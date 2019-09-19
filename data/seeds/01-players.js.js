
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('players').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        { last_name: "ali", player_number: 5 }
      ]);
    });
};
