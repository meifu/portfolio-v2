define([
	'jquery'
	,'underscore'
	,'backbone'
], function($, _, Backbone) {

	Works = Backbone.Model.extend({
		initialize: function(){

		}

	});

	var worksCollection = new Works;

	worksCollection.set({
		"1": { "title": "qoros", "imgSrc": "img/works/qoros_middle.jpg", "items": ["html, css", "javascript"]},
		"2": { "title": "lxn_s5", "imgSrc": "img/works/s5_middle.jpg", "items": ["html, SASS", "javascript", "facebook"]} 
	});

	return worksCollection;

});