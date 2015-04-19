import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'inventory.item',
  rootItems: function() {
    var rootItems = this.filter(function(inventory) {
      return inventory.get('model.parent') === "";
    });
    return rootItems;
  }.property('content.@each.parent'),
    actions: {
    moveItem: function(item) {
      this.transitionTo('/inventory/move/'+item.model.get('id'));
    },
    editItem: function(item) {
      this.transitionTo('/inventory/edit/'+item.model.get('id'));
    }
  }
});