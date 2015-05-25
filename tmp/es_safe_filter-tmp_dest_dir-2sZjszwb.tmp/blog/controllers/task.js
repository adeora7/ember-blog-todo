import Ember from "ember";

var TaskController = {
	isEditing : false,
	actions : {
		edit: function() {
			this.set('isEditing', true); 
		},
		doneEditing: function() {
			this.set('isEditing', false);
		}
	}
};

export default Ember.ObjectController.extend(PostController);