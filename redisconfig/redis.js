
'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1, no-warning-comments:1 no-underscore-dangle:0*/
//These are for my eslint setup

module.exports = function (client){

  client.on('connect', function(err, res){
  if (err) {
    console.log('cant connect to redis');
  }
  if (res){
    console.log('connected to redis');
}

  });

client.set('settest', 'successful', function(err, reply) {
  if(err){
    console.log(err.stack);
    console.log('Check if server is up');
  }
  if (reply){
  console.log('successful write to redis');
}
});

client.get('settest', function (err, reply){
  if (err){
    console.log('Unsuccessful acquiring of test from redis');
    console.log('Check if server is up');
    console.log(err.stack);
  }
  if (reply){
    console.log('Successful read from redis');
  }
});
};
