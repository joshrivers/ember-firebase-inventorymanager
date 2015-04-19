import Ember from 'ember';

export
default Ember.ArrayController.extend({
  itemController: 'inventory.moveitem',
  root: {model: {description: 'The World', isContainer: 'true', get: function(){return '';}}},
  rootItems: function() {
    var itemToMoveId = this.itemToMoveId;
    var rootItems = this.filter(function(inventory) {
      return inventory.get('model.parent') === "" && inventory.get('model.isContainer') &&
        inventory.get('model.id') !== itemToMoveId;
    });
    return rootItems;
  }.property('content.@each.parent', 'content.@each.isContainer'),
  actions: {
    moveItem: function(item) {
      var itemToMoveId = this.itemToMoveId;
      var targetContainer = item.model.get('id');
      var that = this;
      this.store.find('inventory').then(function(inventories) {
        var itemToMove = inventories.filterBy('id', itemToMoveId)[0];
        itemToMove.set('parent', targetContainer);
        itemToMove.save();
        that.transitionTo('/inventory');
      });
    }
  }
});