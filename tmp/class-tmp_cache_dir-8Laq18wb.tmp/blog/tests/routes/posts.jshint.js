define('blog/tests/routes/posts.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/posts.js should pass jshint', function() { 
    ok(false, 'routes/posts.js should pass jshint.\nroutes/posts.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/posts.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});