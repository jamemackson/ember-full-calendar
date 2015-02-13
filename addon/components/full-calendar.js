import Ember from 'ember';

export default Ember.Component.extend({
  id: 'new-calendar',

  initFullCalendar: function() {
    var selector = this.$().fullCalendar();
    debugger;
  }.on('didInsertElement')
});
