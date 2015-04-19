import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'inventory/index',
  children: function() {
  	var inventoryItemList = this.get('controllers.inventory/index');
  	var thisItemId = this.get('model.id');
  	var children = inventoryItemList.filter(function(inventory) {
      return inventory.get('model.parent') === thisItemId;
    });
    // console.log(children,thisItemId);
    return children;
  }.property('controllers.inventory/index.content.@each.parent')
});