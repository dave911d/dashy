'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1, no-warning-comments:1 no-underscore-dangle:0*/
//These are for my eslint setup
var express = require('express'); //requires express,our HTTP lib
var app = express(); //initiates express

var redis = require('redis'); //requires redis, need this for data monitoring
var adapter = require('socket.io-redis');
var socket = require('socket.io')(3000);
var http = require('http');
var login = require('./redisconfig/configRedis.js');
//this file contains port and ip of redis server

var client = redis.createClient(login.portRedis(), login.ipRedis(), {});
//login is defined in configRedis.js
 socket.adapter(adapter({host: login.ipRedis(), port: login.portRedis()}));
 var pub = redis.createClient(login.portRedis(), login.ipRedis(), {});
 var sub = redis.createClient(login.portRedis(), login.ipRedis(), {});
 socket.adapter(adapter({pubClient: pub, subClient: sub}));

//run if uncaughtexception
app.engine('jade', require('jade').__express);
  app.set('view engine', 'jade');
  //sets jade,need this to display to browser
   app.set('port', process.env.PORT || 3002);
   //Designates port to run on


   require('./socketIo/socketIo.js')(socket);//check this
   require('./redisconfig/redisTest.js')(client);
   //require('./redisconfig/redisConfigSub.js')(sub);
   require('./redisconfig/redisMain.js')(pub);
   require('./routes/routes.js')(app);
   //sets locations for routes
   require('./errorhandling/uncaughtexception.js')(app);
app.listen(app.get('port'), function(err){
    if (err) {
      console.log(err.stack);
      }

    console.log('Express is running on http://localhost:' + app.get('port') + '; press Ctrl-c to end');
      //starts the server on specified port(app.get('port'))
      console.log('Have a pat on the back, its working.');
    });
