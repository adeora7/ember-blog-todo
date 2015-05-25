define('blog/models/post', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	var attr = DS['default'].attr;

	exports['default'] = DS['default'].Model.extend({
		author: DS['default'].belongsTo("author"),
		title: attr("string"),
		post: attr("string"),
		body: attr("string"),
		date: attr("date")
	});

});