define('blog/tests/controllers/task.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/task.js should pass jshint', function() { 
    ok(false, 'controllers/task.js should pass jshint.\ncontrollers/task.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncontrollers/task.js: line 15, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});