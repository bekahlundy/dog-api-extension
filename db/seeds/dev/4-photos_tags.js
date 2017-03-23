exports.seed = function(knex, Promise) {
  return knex('photos_tags').del()
  .then(() => {
    return Promise.all([
      knex('photos_tags').insert({
        tagId: 1,
        photoId: 1,
      }),
      knex('photos_tags').insert({
        tagId: 2,
        photoId: 2,
      }),
      knex('photos_tags').insert({
        tagId: 3,
        photoId: 3,
      }),
      knex('photos_tags').insert({
        tagId: 1,
        photoId: 3,
      }),
    ]);
  });
};
