define('blog/helpers/format-date', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	/*global moment:false*/

	exports['default'] = Ember['default'].Handlebars.makeBoundHelper(function (date) {
		return moment(date).fromNow();
	});

});