
import Ember from 'ember';

export default Ember.Route.extend({
  questionAnswer: [],

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params){
    Object.keys(params).forEach(function(key){
      if(params[key]!==undefined) {
        question.set(key,params[key]);
      }
    });
      question.save();
      this.transitionTo('index');
    },
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
    },
    updateAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
         if(params[key]!==undefined) {
           answer.set(key,params[key]);
         }
       });
      answer.save();
    }
  }
});
