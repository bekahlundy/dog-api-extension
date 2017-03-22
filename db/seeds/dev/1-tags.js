exports.seed = function(knex, Promise) {
  return knex('tags').del()
  .then(() => {
    return Promise.all([
      knex('tags').insert({
        tagName: 'puppy',
      }),
      knex('tags').insert({
        tagName: 'cute',
      }),
      knex('tags').insert({
        tagName: 'brown',
      }),
    ]);
  });
};
