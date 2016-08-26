import DS from 'ember-data';

export default DS.Model.extend({
questionContent: DS.attr(),
authorQuestion: DS.attr(),
notes: DS.attr(),
answers: DS.hasMany('answer', {async: true}),
favorite: DS.attr()
});
