exports.seed = function(knex, Promise) {
  return knex('photos').del()
  .then(() => {
    return Promise.all([
      knex('photos').insert({
        dogName: 'mr. wiggles',
        pic: 'https://www.pup.com',
      }),
      knex('photos').insert({
        dogName: 'tiny',
        pic: 'https://www.pup.com',
       }),
      knex('photos').insert({
        dogName: 'scruffy',
        pic: 'https://www.pup.com',
      }),
    ]);
  });
};
