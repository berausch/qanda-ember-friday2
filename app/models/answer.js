import DS from 'ember-data';

export default DS.Model.extend({
 answerContent: DS.attr(),
 author: DS.attr(),
 questionContent: DS.belongsTo('question', {async: true})
});
