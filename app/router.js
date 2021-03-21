import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("login");
  this.route("signup");
  this.route('question', { path: ':slug' });
  this.route('ask-question');
  this.route('edit-question', { path: 'edit-question/:id' });
});

export default Router;
