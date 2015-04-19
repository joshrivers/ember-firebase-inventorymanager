import Ember from 'ember';

export
default Ember.Component.extend({
  actions: {
    move: function() {
      this.sendAction('move', this.get('item'));
    }
  }
});