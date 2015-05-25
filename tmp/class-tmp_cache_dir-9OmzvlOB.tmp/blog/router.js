define('blog/router', ['exports', 'ember', 'blog/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType
    });

    Router.map(function () {
        this.route("about");
        this.resource("posts", function () {
            this.resource("post", { path: ":post_id" });
        });
    });

    exports['default'] = Router;

});