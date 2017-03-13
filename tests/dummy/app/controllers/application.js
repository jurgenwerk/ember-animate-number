import Ember from 'ember';

export default Ember.Controller.extend({
  value: 20,
  actions: {
    add() {
      this.set('value', this.get('value') + 20);
    },
    remove() {
      this.set('value', this.get('value') - 20);
    }
  }
})
