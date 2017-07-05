'use strict';

const { getDOM } = require('./utility');
const url = 'http://www.seattletimes.com/';

function scrapeSeattleTimes() {
  console.log(getDOM(url));
}
