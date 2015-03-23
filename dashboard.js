'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1, no-warning-comments:1 no-underscore-dangle:0*/

var express = require('express');
var app = express();
require('./routes/routes.js')(app);
require('./errorhandling/uncaughtexception.js')(app);
app.engine('jade', require('jade').__express);
    app.set('view engine', 'jade');
    app.set('views', './views');
    app.set('port', process.env.PORT || 3002);


app.listen(app.get('port'), function(){
    console.log('Express is running on http://localhost:' + app.get('port') + '; press Ctrl-c to end');
    console.log('at least its working dude');
  });
