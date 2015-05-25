define('blog/tests/routes/tasks.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/tasks.js should pass jshint', function() { 
    ok(false, 'routes/tasks.js should pass jshint.\nroutes/tasks.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/tasks.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});