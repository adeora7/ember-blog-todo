define('blog/helpers/format-markdown', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/*global Showdown:false*/
	/*global Handlebars:false*/
	exports['default'] = Ember['default'].Handlebars.makeBoundHelper(function (markdown) {
		var showdown = new Showdown.converter();
		return new Ember['default'].Handlebars.SafeString(showdown.makeHtml(markdown));
	});

});