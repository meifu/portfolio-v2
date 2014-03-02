// require(["config"], function() {
//   // Kick off the application.
//   require(["app", "router"], function(app, Router) {
//     app.router = new Router();

//     Backbone.history.start({ pushState: true, root: app.root });
//   });
// });

require.config({
	paths: {
		"vendor": "../vendor",
	    "almond": "../vendor/almond/almond",
	    "underscore": "../vendor/lodash/dist/lodash.underscore",
	    "jquery": "../vendor/jquery/dist/jquery",
	    "backbone": "../vendor/backbone/backbone",
	    "snap": "../vendor/Snap.svg/dist/snap.svg-min",
	    "parallax": "../vendor/parallax/deploy/jquery.parallax.min"
	}
});

require([
	// 'backbone',
	// 'router',
	'app'
], function(App){
	console.log('mainjs');
	App.initialize();
});