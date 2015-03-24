'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1, no-warning-comments:1 no-underscore-dangle:0*/
//These are for my eslint setup
var express = require('express'); //requires express,our HTTP lib
var app = express(); //initiates express

var redis = require('redis'); //requires redis, need this for data monitoring
var adapter = require('socket.io-redis');
var io = require('socket.io')(3000);
var http = require('http');
var server = http.createServer(app);
var ioServer = io.listen(server);
var login = require('./redisconfig/configRedis.js');
//this file contains port and ip of redis server

var client = redis.createClient(login.portRedis(), login.ipRedis(), {});
/*login is defined in configRedis.js */
 io.adapter(adapter({host: login.ipRedis(), port: login.portRedis()}));
 var pub = redis.createClient(login.portRedis(), login.ipRedis(), {});
 var sub = redis.createClient(login.portRedis(), login.ipRedis(), {});
 io.adapter(adapter({pubClient: pub, subClient: sub}));

//run if uncaughtexception
app.engine('jade', require('jade').__express);
  app.set('view engine', 'jade');
  //sets jade,need this to display to browser
   app.set('port', process.env.PORT || 3002);
   //Designates port to run on

   sub.on('connect', function(err){
     if (err){
       console.log(err.stack);
     }
       client.set('sub', 'true');
   });


   require('./redisconfig/redisTest.js')(client);
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
