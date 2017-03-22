exports.seed = function(knex, Promise) {
  return knex('photos').del()
  .then(() => {
    return Promise.all([
      knex('photos').insert({
        dogName: 'mr. wiggles',
        pic: 'https://www.pup.com',
        tagId: 1,
        tag: 'puppy',
      }),
      knex('photos').insert({
        dogName: 'tiny',
        pic: 'https://www.pup.com',
        tagId: 2,
        tag: 'cute',
      }),
      knex('photos').insert({
        dogName: 'scruffy',
        pic: 'https://www.pup.com',
        tagId: 3,
        tag: 'brown',
      }),
    ]);
  });
};
