'use strict';

const request = require('request');

function getDOM(url) {
  return new Promise((resolve, reject) => {
    return request.get(url, (err, res, DOM) => {
      if (err) {
        reject(err);
      }

      resolve(DOM);
    })
  });
}

module.exports = {
  getDOM
}
