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
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 4,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 5,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 6,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 7,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 8,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 9,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 10,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 11,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 12,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 13,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 14,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 15,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 16,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 17,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 18,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 19,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 20,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 21,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 22,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 23,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 24,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 25,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 26,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 27,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 28,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 29,
      }),
      knex('feelings').insert({
        feelingName: 'happy',
        photoId: 30,
      }),
    ]);
  });
};
