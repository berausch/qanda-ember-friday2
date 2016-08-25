import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<img class="fire-icon" src="/assets/images/flame.png">');
  }


}

export default Ember.Helper.helper(questionPopularity);
