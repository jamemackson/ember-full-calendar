import Ember from 'ember';
import Event from 'ember-full-calendar/models/event';

export default Ember.Component.extend({
  id: 'new-calendar',

  addEvent: function(date) {
    var store = this.get('parentView.controller.store');
    var event = Event.create({
      title: 'hello world',
      allDay: true,
      start: date
    });
    console.log(event);
    this._sendAction('renderEvent', event);
  },

  dayClick: function(date, jsEvent, view) {
    debugger;
    this.addEvent(date);
    console.log(date, jsEvent, view);
  },

  actions: {
    dayClick: function(date) {
      this.addEvent(date);
    },
  },

  initFullCalendar: function() {
    var _this = this;

    _this.$().fullCalendar({
      dayClick: function(date) { return _this.send('dayClick', date) }
      // eventClick: this.eventClick,
      // eventMouseover: this.eventMouseover,
      // eventMouseout: this.eventMouseout
    });
  }.on('didInsertElement'),

  _sendAction: function(action, args) {
    debugger;
    return this.$().fullCalendar(action, args);
  }

});
