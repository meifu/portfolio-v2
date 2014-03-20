define([
	'jquery'
	,'underscore'
	,'backbone'
], function($, _, Backbone) {

	Skills = Backbone.Model.extend({
		initialize: function(){

		}

	});

	var skillsset = new Skills;

	skillsset.set({
		description: [
			'I can do HTML',
			'I can do CSS (and SASS)',
			'I can do Javascript (and Backbone, Node, MongoDB...)',
			'I can do more (Wordpress, design)'
		]
	});

	return skillsset;

});