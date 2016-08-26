import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        answerContent: this.get('answerContent') ? this.get('answerContent') : "",
        authorAnswer: this.get('authorAnswer') ? this.get('authorAnswer') : "",
        question: this.get('question') ? this.get('question') : "",
        votes:0
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
