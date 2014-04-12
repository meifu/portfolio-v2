define([
	'jquery'
	,'underscore'
	,'backbone'
	,'text!templates/navTempl.html'
	,'text!templates/workTempl.html'
	// ,'glidejs'
	,'model/SkillModel'
	,'model/WorksModel'
], function($, _, Backbone, NavTempl, WorkTempl, SkillModel, WorkModel) {
	var self;
	var WorksView = Backbone.View.extend({
		el: '#worksContainer',
		template: _.template(WorkTempl),
		initialize: function() {
			this.render();
			$('svg').empty();
		},

		render: function() {
			// console.log('work templ: ' + WorkTempl);
			console.log('work model: ' + WorkModel.get("1"));
			console.log('work model: ' + WorkModel.get("1").title);
			// console.log('work model: ' + Object.keys(WorkModel.attributes));
			var worksLength = (Object.keys(WorkModel.attributes)).length;
			this.$el.html(this.template(WorkModel.get("1")));
			$('#container').fadeOut();
			// console.log('sssss ' + $('#middle').html());
			if ( $('#middle').html() == '') {
				var nav_template = _.template(NavTempl);
				$('#middle').html(nav_template);	
				for (var i = 0; i < SkillModel.attributes.description.length; i++) {
					$('#skill' + i).html(SkillModel.attributes.description[i]);
				}
			}
			$('#middle').addClass('leftSide');
			$('#worksContainer').fadeIn();
			$('#skillWrapInner').attr('class', 's5');
			// $('.slider').glide(
			// 	// {autoplay: 3000
			// 	// ,arrows: 'body'
			// 	// ,navigation: 'body'}
			// );

			$(window).unbind('scroll', this.detectScroll);
		}
		
	});

	return WorksView;
});