
'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1, no-warning-comments:1 no-underscore-dangle:0*/
//These are for my eslint setup

module.exports = function (client){



  client.on('connect', function(){
    console.log('connected to redis');
  });

client.set('test', 'successful', function(err, reply) {
  if(err){
    console.log(err.stack);
  }
  if (reply){
  console.log(reply);
  console.log('successful write to redis');
}
});

client.get('test', function (err, reply){
  if (err){
    console.log('unsuccessful aquiring of test from redis');
    console.log('check if server is up');
    console.log(err.stack);
  }
  if (reply){
    console.log(reply);
    console.log('successful read from redis');
  }

});
};
