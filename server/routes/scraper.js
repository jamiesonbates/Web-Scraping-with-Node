'use strict';

const router = require('express').Router();
const scrapeSeattleTimes = require('../bots/seattleTimes');
const { insertStories } = require('../db/actions');

router.get('/seattletimes', (req, res, next) => {
  const url = 'http://www.seattletimes.com/';

  scrapeSeattleTimes(url)
    .then((data) => {
      // retrieve and persist data
    })
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
