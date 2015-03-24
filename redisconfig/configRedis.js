
'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1, no-warning-comments:1 no-underscore-dangle:0*/
//These are for my eslint setup

var exports = module.exports = {};

exports.portRedis = function() {
  return '6379'; //change to the port of your redis server
};

exports.ipRedis = function() {
  return '10.0.0.49';  //change to the ip of your redis server
};
