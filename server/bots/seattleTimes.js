'use strict';

const { getDOM } = require('./utility');
const cheerio = require('cheerio');
const moment = require('moment');

async function scrapeSeattleTimes(url) {
  const DOM = await getDOM(url);
  const $ = cheerio.load(DOM);
  const primary = extractPrimary($);
  const secondary = extractSecondary($);

  primary.was_primary = true

  return { primary, secondary };
}

function extractPrimary($) {
  const title = $('.top-story-content .top-story-title a').text();
  const url = $('.top-story-content .top-story-title a').attr('href');
  const story_date = moment().format();

  return { title, url, story_date };
}

function extractSecondary($) {
  const list = $('.secondary .story-list ul').children('li');
  const stories = [];

  // use cheerio's each method to iterate through li
  list.each((i, el) => {
    const title = $(el).children('a').text();
    const url = $(el).children('a').attr('href');
    const story_date = moment().format();

    stories.push({ title, url, story_date });
  });

  return stories;
}

module.exports = scrapeSeattleTimes;
