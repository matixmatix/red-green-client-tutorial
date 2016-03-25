import Ember from 'ember';

export default Ember.Component.extend({
  barStyle: Ember.computed('widthPercent', function() {
    return `width: ${this.get('widthPercent')}%`;
  })
});
