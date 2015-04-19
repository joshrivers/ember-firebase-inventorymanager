import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      var newPost = this.store.createRecord('inventory', {
        description: this.get('description'),
        isContainer: this.get('isContainer'),
        parent: ""
      });
      newPost.save();
      this.transitionTo('/inventory');
    }
  }
});