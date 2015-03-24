'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1, no-warning-comments:1 no-underscore-dangle:0*/
//These are for my eslint setup
var express = require('express'); //requires express,our HTTP lib
var app = express();
var redis = require('redis');
var login = require('./redisconfig/configRedis.js');

//var portRedis = 6379; //put your port here
//var ipRedis = '10.0.0.49';  //put your IP address here
var client = redis.createClient(login.portRedis(), login.ipRedis(), {});
require('./redisconfig/redis.js')(client);
 //this file is not included in the project,check github for more info
require('./routes/routes.js')(app); //sets locations for routes
require('./errorhandling/uncaughtexception.js')(app); //run if uncaughtexception
app.engine('jade', require('jade').__express);
    app.set('view engine', 'jade');
    app.set('port', process.env.PORT || 3002); //Designates port to run on


    app.listen(app.get('port'), function(){
        console.log('Express is running on http://localhost:' + app.get('port') + '; press Ctrl-c to end');
        console.log('at least its working dude');
      }); //starts the server on specified port
