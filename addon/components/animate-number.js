import Ember from 'ember';
import layout from '../templates/components/animate-number';

export default Ember.Component.extend({
  layout,
  didInsertElement() {
    this.animateNumber(0, this.get('value'));
  },
  didReceiveAttrs() {
    this.set('oldValue', this.get('value'));
  },
  didUpdateAttrs() {
    const numberFrom = this.get('oldValue') ? this.get('oldValue') : 0;
    this.animateNumber(numberFrom, this.get('value'));
  },
  animateNumber(numberFrom, numberTo) {
    this.$()
      .prop('number', numberFrom)
      .animateNumber(
        {
          number: numberTo
        },
        'linear'
      );
  }
});
