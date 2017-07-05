'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('stories', (table) => {
    table.increments();
    table.string('title');
    table.string('url');
    table.boolean('primary');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('stories');
};
