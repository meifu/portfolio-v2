
require.config({
	paths: {
		"vendor"    : "../vendor",
	    "almond"    : "../vendor/almond/almond",
	    "underscore": "../vendor/lodash/dist/lodash.underscore",
	    "jquery"    : "../vendor/jquery/dist/jquery",
	    "backbone"  : "../vendor/backbone/backbone",
	    "snap"      : "../vendor/Snap.svg/dist/snap.svg-min",
	    // "parallax"  : "../vendor/parallax/deploy/jquery.parallax.min",
	    "text"      : "../vendor/requirejs-text/text",
	    // "glidejs"   : "../vendor/glidejs/dist/jquery.glide.min",
	    "indexView" : "indexView",
	    "sec1view"  : "sec1eleView",
	    "sec2view"  : "sec2eleView",
	    "sec3view"  : "sec3eleView",
	    "sec4view"  : "sec4eleView",
	    "worksView" : "worksView"
	}
});

require([
	'backbone',
	'router'
	// ,'app'
	,'indexView'
], function(Backbone, Router, IDV){
	Backbone.history.start();
});