define('blog/tests/routes/task.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/task.js should pass jshint', function() { 
    ok(false, 'routes/task.js should pass jshint.\nroutes/task.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/task.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});