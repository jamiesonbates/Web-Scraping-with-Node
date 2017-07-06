'use strict';

// const { getDOM } = require('./utility');
const cheerio = require('cheerio');
const moment = require('moment');

function scrapeSeattleTimes(url) {
  return getDOM(url)
    // then? traverse dom and format data
}

function extractPrimary($) {
  // extract primary stories
}

function extractSecondary($) {
  // extract secondary stories
}

module.exports = scrapeSeattleTimes;
