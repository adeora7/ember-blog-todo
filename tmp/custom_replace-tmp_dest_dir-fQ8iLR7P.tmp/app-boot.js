/* jshint ignore:start */

define('blog/config/environment', ['ember'], function(Ember) {
  var prefix = 'blog';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("blog/tests/test-helper");
} else {
  require("blog/app")["default"].create({"name":"blog","version":"0.0.0."});
}

/* jshint ignore:end */
