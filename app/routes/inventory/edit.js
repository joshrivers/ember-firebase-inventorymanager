import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('inventory').then(function(inventories){
    	return inventories.filterBy('id', params.id)[0];
    });
  }
});

export default IndexRoute;