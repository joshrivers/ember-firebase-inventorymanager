import DS from 'ember-data';

export default DS.Model.extend({
  isContainer: DS.attr('boolean'),
  description: DS.attr('string'),
  parent: DS.attr('string')
});