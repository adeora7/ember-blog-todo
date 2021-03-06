import Ember from "ember";

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

export default Ember.ObjectController.extend(PostController);