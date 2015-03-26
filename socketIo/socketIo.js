'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1, no-warning-comments:1 no-underscore-dangle:0*/
//These are for my eslint setup



module.exports = function (socket){


 socket.on('connect', function(socket){
   //$('#status').text('connected');
   console.log('testin');
 });
};
