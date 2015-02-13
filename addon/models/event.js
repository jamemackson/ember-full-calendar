import Ember from 'ember';

export default Ember.Object.extend({
  allDay: false,
  start: null,
  title: '',
});




// import DS from 'ember-data';

// var attr = DS.attr;

// export default DS.Model.extend({
//   allDay: attr('boolean'),
//   backgroundColor: attr('string'),
//   borderColor: attr('string'),
//   className: attr('string'),
//   constraint: attr('string'),
//   durationEditable: attr('boolean'),
//   end: attr('string'),
//   editable: attr('boolean'),
//   rendering: attr('string'),
//   start: attr('string'),
//   startEditable: attr('boolean'),
//   source: attr('string'),
//   title: attr('string'),
//   textColor: attr('string'),
//   url: attr('string'),
// });
