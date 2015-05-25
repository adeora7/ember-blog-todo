define('blog/models/task', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	var attr = DS['default'].attr;

	exports['default'] = DS['default'].Model.extend({
		title: attr("string"),
		body: attr("string") });

});