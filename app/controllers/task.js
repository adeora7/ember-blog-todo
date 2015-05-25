import Ember from "ember";
import DS from 'ember-data';

var TaskController = {
	isEditing : false,
	actions : {
		edit: function() {
			this.set('isEditing', true); 
		},
		doneEditing: function() {
			this.set('isEditing', false);
		},
		add: function() {
			this.store.createRecord('task', {
				title: 'new record',
				body: 'as if i care huh !!'
			});
			this.store.record.save();
		}
		
	}
};

export default Ember.ObjectController.extend(TaskController);