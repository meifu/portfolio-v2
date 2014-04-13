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
		"2": { "title": "lxn_s5", "imgSrc": "img/works/s5_middle.jpg", "items": ["html, SASS", "javascript", "facebook"]},
		"3": { "title": "lxn_s6", "imgSrc": "img/works/u6_middle.jpg", "items": ["html, SASS", "javascript", "facebook"]},
		"4": { "title": "ardic", "imgSrc": "img/works/ardic_middle.jpg", "items": ["html, SASS", "javascript"]},
		"5": { "title": "shokay", "imgSrc": "img/works/shokay_middle.jpg", "items": ["html, SASS", "javascript", "wordpress"]},
		"6": { "title": "foreverlove", "imgSrc": "img/works/foreverlove_middle.jpg", "items": ["html, SASS", "javascript"]},
		"7": { "title": "wedding", "imgSrc": "img/works/wedding_middle.jpg", "items": ["html, SASS", "javascript", "design with Photoshop"]},
		"8": { "title": "kamia", "imgSrc": "img/works/kamia_middle.jpg", "items": ["html, SASS", "javascript", "wordpress"]}
	});	

	return worksCollection;

});