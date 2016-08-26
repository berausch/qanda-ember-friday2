import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    updateAnswer(answer, params){
      this.sendAction('updateAnswer', answer, params);
    },
    deleteAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
