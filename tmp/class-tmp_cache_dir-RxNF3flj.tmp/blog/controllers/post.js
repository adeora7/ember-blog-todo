define('blog/controllers/post', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var PostController = {
		isEditing: false,
		actions: {
			edit: function edit() {
				this.set("isEditing", true);
			},
			doneEditing: function doneEditing() {
				this.set("isEditing", false);
			}
		}
	};

	exports['default'] = Ember['default'].ObjectController.extend(PostController);

});