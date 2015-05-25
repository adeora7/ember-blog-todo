define('blog/controllers/task', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var TaskController = {
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