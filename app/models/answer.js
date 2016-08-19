import DS from 'ember-data';

export default DS.Model.extend({
 answerContent: DS.attr(),
 authorAnswer: DS.attr(),
 question: DS.belongsTo('question', {async: true})
});
