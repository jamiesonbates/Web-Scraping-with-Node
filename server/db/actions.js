'use strict';

const db = require('./connection');

function insertStories(stories) {
  return new Promise((resolve, reject) => {
    db('stories')
      .insert(stories)
      .returning('*')
      .then((results) => {
        resolve(results);
      })
      .catch((err) => {
        reject(err);
      })
  });
}

module.exports = {
  insertStories
};
