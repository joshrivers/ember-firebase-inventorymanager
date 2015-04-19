import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
	this.route('inventory', { path: '/inventory' }, function() {
		this.route('add', { path: 'add'});
		this.route('edit', { path: 'edit/:id'});
		this.route('move', { path: 'move/:id'});
	});
});