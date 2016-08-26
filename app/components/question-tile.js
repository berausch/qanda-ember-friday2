import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  favoriteQuestion: false,
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  init: function() {

    if(this.get('question.favorite') === true) {
      this.set('favoriteQuestion', true);
    } else {
      this.set('favoriteQuestion', false);
    }
    return this._super();
  },

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
    },
    makeFavorite(question) {
      this.set('question.favorite', true);
      this.get('favorites').addQuestion(question);
      this.set('favoriteQuestion', true);
    },
    deleteFavorite(question) {
      this.set('question.favorite', true);
      this.get('favorites').removeQuestion(question);
      this.set('favoriteQuestion', false);
    }
  }
});
