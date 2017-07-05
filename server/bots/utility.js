'use strict';

const request = require('request');

function getDOM(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res, DOM) => {
      if (err) {
        return reject(err);
      }

      resolve(DOM);
    })
  });
}

module.exports = {
  getDOM
}
