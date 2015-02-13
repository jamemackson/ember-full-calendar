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

  removeEvent: function(event) {
    this._sendAction('removeEvents', event.get('_id'));
  },

  actions: {
    dayClick: function(date) {
      this.addEvent(date);
    },

    eventClick: function(event) {
      this.removeEvent(event);
    },
  },

  initFullCalendar: function() {
    var _this = this;

    _this.$().fullCalendar({
      dayClick: function(date) { return _this.send('dayClick', date); },
      eventClick: function(event) { return _this.send('eventClick', event); },
      // eventMouseover: this.eventMouseover,
      // eventMouseout: this.eventMouseout
    });
  }.on('didInsertElement'),

  _sendAction: function(action, args) {
    return this.$().fullCalendar(action, args);
  }

});
