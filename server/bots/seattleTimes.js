'use strict';

const { getDOM } = require('./utility');
const cheerio = require('cheerio');

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
      console.error(err);
    })
}

function extractPrimary($) {
  const title = $('.top-story-title').text();
  const link = $('.top-story-title a').attr('href');

  return { title, link };
}

function extractSecondary($) {
  const list = $('.secondary .story-list ul').children('li');
  const stories = [];

  // use cheerio's each method to iterate through li
  list.each((i, el) => {
    const title = $(el).children('a').text();
    const link = $(el).children('a').attr('href');

    stories.push({ title, link });
  });
  return stories;
}

module.exports = scrapeSeattleTimes;
