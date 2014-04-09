define([
	'jquery'
	,'underscore'
	,'backbone'
	,'text!templates/navTempl.html'
	// ,'glidejs'
	,'model/SkillModel'
], function($, _, Backbone, NavTempl, SkillModel) {
	var self;
	var WorksView = Backbone.View.extend({
		el: '#worksContainer',
		initialize: function() {
			this.render();
			$('svg').empty();
		},

		render: function() {
			$('#container').fadeOut();
			// console.log('sssss ' + $('#middle').html());
			if ( $('#middle').html() == '') {
				var nav_template = _.template(NavTempl);
				$('#middle').html(nav_template);	
			}
			$('#middle').addClass('leftSide');
			$('#worksContainer').fadeIn();
			$('#skill4').html(SkillModel.attributes.description[4]);
			$('#skillWrapInner').attr('class', 's5');
			// $('.slider').glide(
			// 	// {autoplay: 3000
			// 	// ,arrows: 'body'
			// 	// ,navigation: 'body'}
			// );
		}
		
	});

	return WorksView;
});