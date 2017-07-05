'use strict';

const db = require('./connection');

function insertStories(stories) {
  return new Promise((resolve, reject) => {
    return db('stories as s1')
      .insert(stories)
      .returning('*')
      .then((results) => {
        return resolve(results);
      })
      .catch((err) => {
        return reject(err);
      })
  });
}

module.exports = {
  insertStories
};
