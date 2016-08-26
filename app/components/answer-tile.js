import Ember from 'ember';

export default Ember.Component.extend({
  voteNumber: false,
  init: function() {
    if(this.get('answer.votes') === 0) {
      this.set('voteNumber', false);
    } else {
      this.set('voteNumber', true);
    }
    console.log(this.get('answer.votes'));
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
}
});
