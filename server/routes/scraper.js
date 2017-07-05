'use strict';

const router = require('express').Router();
const scrapeSeattleTimes = require('../bots/seattleTimes');
const { insertStories } = require('../db/actions');

router.get('/seattletimes', (req, res, next) => {
  // use bots and actions to get data and persist
});

module.exports = router;
