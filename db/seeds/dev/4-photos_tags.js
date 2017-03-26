exports.seed = function(knex, Promise) {
  return knex('photos_tags').del()
  .then(() => {
    return Promise.all([
      knex('photos_tags').insert({
        tagId: 10,
        photoId: 1,
      }),
      knex('photos_tags').insert({
        tagId: 16,
        photoId: 2,
      }),
      knex('photos_tags').insert({
        tagId: 11,
        photoId: 3,
      }),
      knex('photos_tags').insert({
        tagId: 3,
        photoId: 4,
      }),
      knex('photos_tags').insert({
        tagId: 11,
        photoId: 4,
      }),
      knex('photos_tags').insert({
        tagId: 11,
        photoId: 5,
      }),
      knex('photos_tags').insert({
        tagId: 4,
        photoId: 6,
      }),
      knex('photos_tags').insert({
        tagId: 5,
        photoId: 6,
      }),
      knex('photos_tags').insert({
        tagId: 17,
        photoId: 7,
      }),
      knex('photos_tags').insert({
        tagId: 3,
        photoId: 8,
      }),
      knex('photos_tags').insert({
        tagId: 1,
        photoId: 9,
      }),
      knex('photos_tags').insert({
        tagId: 10,
        photoId: 9,
      }),
      knex('photos_tags').insert({
        tagId: 8,
        photoId: 9,
      }),
      knex('photos_tags').insert({
        tagId: 17,
        photoId: 10,
      }),
      knex('photos_tags').insert({
        tagId: 1,
        photoId: 11,
      }),
      knex('photos_tags').insert({
        tagId: 3,
        photoId: 11,
      }),
      knex('photos_tags').insert({
        tagId: 13,
        photoId: 11,
      }),
      knex('photos_tags').insert({
        tagId: 14,
        photoId: 12,
      }),
      knex('photos_tags').insert({
        tagId: 10,
        photoId: 12,
      }),
      knex('photos_tags').insert({
        tagId: 13,
        photoId: 13,
      }),
      knex('photos_tags').insert({
        tagId: 12,
        photoId: 13,
      }),
      knex('photos_tags').insert({
        tagId: 13,
        photoId: 14,
      }),
      knex('photos_tags').insert({
        tagId: 9,
        photoId: 14,
      }),
      knex('photos_tags').insert({
        tagId: 13,
        photoId: 15,
      }),
      knex('photos_tags').insert({
        tagId: 4,
        photoId: 16,
      }),
      knex('photos_tags').insert({
        tagId: 9,
        photoId: 17,
      }),
      knex('photos_tags').insert({
        tagId: 5,
        photoId: 17,
      }),
      knex('photos_tags').insert({
        tagId: 6,
        photoId: 17,
      }),
      knex('photos_tags').insert({
        tagId: 7,
        photoId: 18,
      }),
      knex('photos_tags').insert({
        tagId: 6,
        photoId: 19,
      }),
      knex('photos_tags').insert({
        tagId: 7,
        photoId: 20,
      }),
      knex('photos_tags').insert({
        tagId: 8,
        photoId: 20,
      }),
      knex('photos_tags').insert({
        tagId: 9,
        photoId: 21,
      }),
      knex('photos_tags').insert({
        tagId: 15,
        photoId: 22,
      }),
      knex('photos_tags').insert({
        tagId: 15,
        photoId: 23,
      }),
      knex('photos_tags').insert({
        tagId: 4,
        photoId: 23,
      }),
      knex('photos_tags').insert({
        tagId: 6,
        photoId: 23,
      }),
      knex('photos_tags').insert({
        tagId: 1,
        photoId: 24,
      }),
      knex('photos_tags').insert({
        tagId: 15,
        photoId: 24,
      }),
      knex('photos_tags').insert({
        tagId: 2,
        photoId: 25,
      }),
      knex('photos_tags').insert({
        tagId: 6,
        photoId: 25,
      }),
      knex('photos_tags').insert({
        tagId: 13,
        photoId: 26,
      }),
      knex('photos_tags').insert({
        tagId: 9,
        photoId: 26,
      }),
      knex('photos_tags').insert({
        tagId: 10,
        photoId: 27,
      }),
      knex('photos_tags').insert({
        tagId: 9,
        photoId: 27,
      }),
      knex('photos_tags').insert({
        tagId: 10,
        photoId: 28,
      }),
      knex('photos_tags').insert({
        tagId: 1,
        photoId: 29,
      }),
      knex('photos_tags').insert({
        tagId: 9,
        photoId: 29,
      }),
      knex('photos_tags').insert({
        tagId: 4,
        photoId: 30,
      }),
      knex('photos_tags').insert({
        tagId: 2,
        photoId: 30,
      }),
    ]);
  });
};
