'use strict';

// const { getDOM } = require('./utility');
const cheerio = require('cheerio');
const moment = require('moment');

function scrapeSeattleTimes(url) {
  return getDOM(url)
    .then((DOM) => {
      // typeof DOM === string
      // load the DOM with cheerio (an implicit action in jQuery)
      const $ = cheerio.load(DOM);

      const primary = extractPrimary($);
      const secondary = extractSecondary($);

      return { primary, secondary };
    })
    .catch((err) => {
      throw err;
    })
}

function extractPrimary($) {
  // extract primary stories
}

function extractSecondary($) {
  // extract secondary stories
}

module.exports = scrapeSeattleTimes;
