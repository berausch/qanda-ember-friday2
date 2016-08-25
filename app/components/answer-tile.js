import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvoteAnswer(answer) {
      answer.incrementProperty("vote");
    }
  }
});
