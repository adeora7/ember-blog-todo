import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
    this.route("about");
    this.resource("posts", function () {
        this.resource("post", { path: ":post_id" });
    });

    this.resource("tasks", function () {
        this.resource("task", { path: ":task_id" });
    });
});

export default Router;