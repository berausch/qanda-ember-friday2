import Ember from 'ember';

export default Ember.Service.extend({
  favoriteAnswers: [],
  favoriteQuestions: [],

  addAnswer(fav) {
    this.get('favoriteAnswers').pushObject(fav);
  },

  removeAnswer(fav) {
    this.get('favoriteAnswers').removeObject(fav);
  },


  addQuestion(fav) {
    this.get('favoriteQuestions').pushObject(fav);
  },

  removeQuestion(fav) {
    this.get('favoriteQuestions').removeObject(fav);
  }


});
