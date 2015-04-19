import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'inventory/move',
  children: function() {
  	var inventoryItemList = this.get('controllers.inventory/move');
    var itemToMoveId = this.get('controllers.inventory/move.itemToMoveId');
  	var thisItemId = this.get('model.id');
  	var children = inventoryItemList.filter(function(inventory) {
      return inventory.get('model.id') !== itemToMoveId && inventory.get('model.isContainer') === true && inventory.get('model.parent') === thisItemId;
    });
    return children;
  }.property('controllers.inventory/move.content.@each.parent','controllers.inventory/move.content.@each.isContainer')
});