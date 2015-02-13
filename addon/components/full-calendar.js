import Ember from 'ember';
import Event from 'ember-full-calendar/models/event';

export default Ember.Component.extend({
  id: 'new-calendar',
  events: Ember.A(),

  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  },

  addEvent: function(date) {
    var event = Event.create({
      title: 'hello world',
      allDay: true,
      start: date
    });

    this._sendFCAction('renderEvent', event);
  },

  removeEvent: function(event) {
    console.log(event);
    if (!event) { return; }

    this._sendFCAction('removeEvents', event.get('_id'));
  },

  actions: {
    dayClick: function(date) {
      this.addEvent(date);
    },

    eventClick: function(event) {
      this.removeEvent(event);
    },
    eventMouseover: function(event) {
      console.log(event);
    },
    eventMouseout: function(event) {
      console.log(event);
    }
  },

  initFullCalendar: function() {
    var _this = this;
    var processAction = function(name) {
      return function(arg) {
        _this.send(name, arg);
      };
    };
    var events = ['dayClick', 'eventClick', 'eventMouseover', 'eventMouseout'];
    var options = events.reduce(function(actions, event) {
      actions[event] = processAction(event);

      return actions;
    }, {});

    options = Ember.merge(options, {
      eventSources: [{
        events: this.get('events'),
      }],
      header: this.get('header')
    });

    _this.$().fullCalendar(options);

    this._renderEvents();
  }.on('didInsertElement'),

  _testRenderEvents: function() {
    var events = Ember.A();
    var date, event;

    for (var i=1; i<20; i++) {
      date = moment("2015-2-" + i);
      event = Event.create({
        title: 'event # ' + i,
        allDay: true,
        start: date
      });

      events.push(event);
    }

    this.set('events', events);
  }.on('willInsertElement'),

  _sendFCAction: function(action, args) {
    return this.$().fullCalendar(action, args);
  }

});
