import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  model: function(params) {
  	this.set('itemToMoveId', params.id);
    return this.store.find('inventory');
  },
  setupController: function(controller, model) {
    controller.set('itemToMoveId', this.get('itemToMoveId'));
    controller.set('content', model);
  }
});

export default IndexRoute;