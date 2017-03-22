exports.seed = function(knex, Promise) {
  return knex('photos').del()
  .then(() => {
    return Promise.all([
      knex('photos').insert({
        dogName: 'mr. wiggles',
        pic: 'https://www.pup.com',
        tagId: 1,
      }),
      knex('photos').insert({
        dogName: 'tiny bean',
        pic: 'https://www.pup.com',
        tagId: 2,
      }),
      knex('photos').insert({
        dogName: 'babie',
        pic: 'https://www.pup.com',
        tagId: 3,
      }),
    ]);
  });
};
