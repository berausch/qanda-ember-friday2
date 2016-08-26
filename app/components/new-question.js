import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow(){
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        questionContent: this.get('questionContent') ? this.get('questionContent'): "",
        authorQuestion: this.get('authorQuestion') ? this.get('authorQuestion'): "",
        notes: this.get('notes') ? this.get('notes'): "",
        favorite: false

      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
