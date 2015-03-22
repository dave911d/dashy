'use strict';
/*eslint-env node, mocha */
/*eslint quotes: [2, "single"], curly: 2, camelcase: 1*/


module.exports = function (app){

app.engine('jade', require('jade').__express);
    app.set('view engine', 'jade');
    app.set('views', './views');
    app.set('port', process.env.PORT || 3002);
};
