import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  favoriteAnswer: false,
  voteNumber: false,
  init: function() {
    if(this.get('answer.votes') === 0) {
      this.set('voteNumber', false);
    } else {
      this.set('voteNumber', true);
    }
    return this._super();
  },

  init: function() {

    if(this.get('answer.favorite') === true) {
      this.set('favoriteAnswer', true);
    } else {
      this.set('favoriteAnswer', false);
    }
    return this._super();
  },
  actions: {
    upvoteAnswer(answer) {
      answer.incrementProperty("votes");
      this.set("voteNumber", true);
      var params = {
        votes: this.get('answer.votes')
      };

      this.sendAction('updateAnswer', answer, params);
    },
    deleteAnswer(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('deleteAnswer', answer);
      }
    },
    makeFavorite(answer) {
      this.set('answer.favorite', true);
      this.get('favorites').addAnswer(answer);
      this.set('favoriteAnswer', true);
    },
    deleteFavorite(answer) {
      this.set('answer.favorite', false);
      this.get('favorites').removeAnswer(answer);
      this.set('favoriteAnswer', false);
    }
}
});
