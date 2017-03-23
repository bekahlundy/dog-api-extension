exports.seed = function(knex, Promise) {
  return knex('feelings').del()
  .then(() => {
    return Promise.all([
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 1,
      }),
      knex('feelings').insert({
        feelingName: 'so good',
        photoId: 2,
      }),
      knex('feelings').insert({
        feelingName: 'okay',
        photoId: 3,
      }),
    ]);
  });
};
