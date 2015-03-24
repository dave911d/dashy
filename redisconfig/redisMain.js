
'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1, no-warning-comments:1 no-underscore-dangle:0*/
//These are for my eslint setup
var redis = require('redis');
module.exports = function (pub){
  pub.set('pub', 'true');
  console.log('Pub successfully planted', redis.status);

  };
