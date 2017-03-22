exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('tags', (table) => {
      table.increments('id').primary();
      table.string('tagName');

      table.timestamps();
    }),

    knex.schema.createTable('photos', (table) => {
      table.increments('id').primary()
      table.string('dogName');
      table.string('pic');
      table.integer('tagId')
           .references('id')
           .inTable('tags');

      table.timestamps();
    }),

    knex.schema.createTable('feelings', (table) => {
      table.increments('id').primary();
      table.string('feelingName');
      table.integer('photoId')
           .references('id')
           .inTable('photos');

      table.timestamps();
    }),

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('feelings'),
    knex.schema.dropTable('photos'),
    knex.schema.dropTable('tags'),
  ])
};
