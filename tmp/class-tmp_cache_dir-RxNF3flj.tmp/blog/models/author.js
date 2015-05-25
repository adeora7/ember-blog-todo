define('blog/models/author', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({
		posts: DS['default'].hasMany("post"),
		name: DS['default'].attr("string")
	});

});