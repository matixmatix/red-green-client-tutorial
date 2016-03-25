import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(balanceChangeData) {
      this.get('model').setProperties(balanceChangeData);
      this.get('model').save().then((balanceChange) => {
        this.transitionToRoute('dashboard.incomes');
        this.send('refreshRoute');
      });
    }
  }
});