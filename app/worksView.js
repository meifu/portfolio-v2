define([
	'jquery'
	,'underscore'
	,'backbone'
	,'text!templates/navTempl.html'
	// ,'glidejs'
], function($, _, Backbone, NavTempl) {
	var self;
	var WorksView = Backbone.View.extend({
		el: '#worksContainer',
		initialize: function() {
			this.render();

		},

		render: function() {
			$('#container').fadeOut();
			// console.log('sssss ' + $('#middle').html());
			if ( $('#middle').html() == '') {
				var nav_template = _.template(NavTempl);
				$('#middle').html(nav_template);	
			}
			$('#middle').addClass('leftSide');
			$('#worksContainer').fadeIn().css('height', $(window).innerHeight());
			// $('.slider').glide(
			// 	// {autoplay: 3000
			// 	// ,arrows: 'body'
			// 	// ,navigation: 'body'}
			// );
		}
		
	});

	return WorksView;
});