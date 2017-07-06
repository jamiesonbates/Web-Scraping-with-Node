'use strict';

const router = require('express').Router();
const scrapeSeattleTimes = require('../bots/seattleTimes');
const { insertStories } = require('../db/actions');

router.get('/seattletimes', async (req, res, next) => {
  const url = 'http://www.seattletimes.com/';
  const { primary, secondary } = await scrapeSeattleTimes(url);
  const results = await Promise.all([insertStories([primary]), insertStories(secondary)]);

  res.send(results);
});

module.exports = router;
