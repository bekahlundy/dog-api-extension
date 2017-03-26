exports.seed = function(knex, Promise) {
  return knex('tags').del()
  .then(() => {
    return Promise.all([
      // 1
      knex('tags').insert({
        tagName: 'puppy',
      }),
      // 2
      knex('tags').insert({
        tagName: 'old',
      }),
      // 3
      knex('tags').insert({
        tagName: 'cute',
      }),
      // 4
      knex('tags').insert({
        tagName: 'gross',
      }),
      // 5
      knex('tags').insert({
        tagName: 'ugly',
      }),
      // 6
      knex('tags').insert({
        tagName: 'tiny',
      }),
      // 7
      knex('tags').insert({
        tagName: 'giant',
      }),
      // 8
      knex('tags').insert({
        tagName: 'silly',
      }),
      // 9
      knex('tags').insert({
        tagName: 'dumb',
      }),
      // 10
      knex('tags').insert({
        tagName: 'happy',
      }),
      // 11
      knex('tags').insert({
        tagName: 'sweet',
      }),
      // 12
      knex('tags').insert({
        tagName: 'funny',
      }),
      // 13
      knex('tags').insert({
        tagName: 'wacky',
      }),
      // 14
      knex('tags').insert({
        tagName: 'fluffy',
      }),
      // 15
      knex('tags').insert({
        tagName: 'wiggley',
      }),
      // 16
      knex('tags').insert({
        tagName: 'wet',
      }),
      // 17
      knex('tags').insert({
        tagName: 'beautiful',
      }),
    ]);
  });
};
