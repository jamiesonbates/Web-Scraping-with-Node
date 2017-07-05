'use strict';

const router = require('express').Router();
const scrapeSeattleTimes = require('../bots/seattleTimes');

router.get('/seattletimes', (req, res, next) => {
  const url = 'http://www.seattletimes.com/';
  
  scrapeSeattleTimes(url)
    .then((data) => {
      console.log(data);
    })
});

module.exports = router;
