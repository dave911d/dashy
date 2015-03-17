'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1*/

module.exports = function (app){
process.on('uncaughtException', function(err) {
      console.log('Caught exception: ' + err);
      console.log('Check if port is being used');
      console.log('pid is ' + process.pid);
      console.log('end that PID if required');
      process.kill();
    });
};
