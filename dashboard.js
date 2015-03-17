'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1*/
var express = require('express');
var app = express();
require('./routes/routes.js')(app);
require('./errorhandling/uncaughtexception.js')(app);
var handlebars = require('express-handlebars')
    .create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');
    app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), function(){
    console.log('Express is running on http://localhost:' + app.get('port') + '; press ctrl-c to end');
    console.log('at least its working dude');
  });
