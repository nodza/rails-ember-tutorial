var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
});

export default Router;

Router.map(function() {
  this.route('about');
  this.resource('speakers');
});
