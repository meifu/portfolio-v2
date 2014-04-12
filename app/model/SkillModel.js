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
			'I can code HTML5',
			'I can code CSS (and SASS)',
			'I can code Javascript (and Backbone, Node, MongoDB...)',
			'I am also experienced with Wordpress, design, ...',
			'These are my previous works. To know more, please contact me.'
		]
	});

	return skillsset;

});