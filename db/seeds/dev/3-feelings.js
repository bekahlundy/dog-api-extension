exports.seed = function(knex, Promise) {
  return knex('feelings').del()
  .then(() => {
    return Promise.all([
      knex('feelings').insert({
        feelingName: 'happy',
      }),
      knex('feelings').insert({
        feelingName: 'so good',
      }),
      knex('feelings').insert({
        feelingName: 'okay',
      }),
    ]);
  });
};
