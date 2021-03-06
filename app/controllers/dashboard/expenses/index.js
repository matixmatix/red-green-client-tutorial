import Ember from 'ember';
import BalanceChangePropertiesMixin from 'red-green-tutorial/mixins/balance-change-properties';

export default Ember.Controller.extend(BalanceChangePropertiesMixin, {
  session: Ember.inject.service(),
  actions: {
    delete(balanceChange) {
      if (confirm("Are you sure?")) {
        balanceChange.destroyRecord().then(() => this.send('refreshRoute'));
      }
    }
  }
});
