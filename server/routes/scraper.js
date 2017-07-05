'use strict';

const router = require('express').Router();

router.get('/', (req, res, next) => {
  // use HTTPie to hit this route and test your server
  res.send('Hi from API');
});

module.exports = router;
