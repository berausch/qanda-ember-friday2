import Ember from 'ember';

export default Ember.Component.extend({
  voteNumber: function(){
    if(this.get('answer').votes === 0){
      this.set('voteNumber', false);
    } else {
      this.set('voteNumber', true);
    }
  },
  actions: {
    upvoteAnswer(answer) {
      answer.incrementProperty("votes");

      }
  }
});
