import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('/inventory');
  }
});

export default IndexRoute;