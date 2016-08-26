import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(fav) {
    this.get('favorites').pushObject(fav);
  }
});
