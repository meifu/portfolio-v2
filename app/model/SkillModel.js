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
			'I can code <span>HTML5</span>',
			'I can code <span>CSS (and SASS)</span>',
			'I can code <span>Javascript (and Backbone, Node, MongoDB...)</span>',
			'I am also experienced with <span>Wordpress, design, ...</span>',
			'These are my previous works. To know more, please contact me.'
		]
	});

	return skillsset;

});