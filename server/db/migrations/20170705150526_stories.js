'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('stories', (table) => {
    table.increments();
    table.text('title');
    table.text('url');
    table.boolean('was_primary').defaultTo(false);
    table.timestamp('story_date');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('stories');
};
