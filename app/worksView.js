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
			self = this;
			this.render();
			$('svg').empty();
		},

		render: function() {
			_.each(WorkModel.attributes, function(obj, index){ console.log('index ' + index);
				self.$el.append(WorkTempl);
				$('.workBlock').eq(index-1).attr('id', obj.title);
				var listItemHtml = '<li>' + obj.items.join('</li><li>') + '</li>';
				$('.workBlock').eq(index-1).find('ul').append(listItemHtml);
				$('.workBlock').eq(index-1).find('img').attr('src', obj.imgSrc).attr('alt', obj.title);
				if (index%2 === 0) {
					$('.workBlock').eq(index-1).addClass('rightSide');
				}
			});

			$('#container').fadeOut();
			// console.log('sssss ' + $('#middle').html());
			if ( $('#middle').html() == '') {
				var nav_template = _.template(NavTempl);
				$('#middle').html(nav_template);	
				for (var i = 0; i < SkillModel.attributes.description.length; i++) {
					$('#skill' + i).html(SkillModel.attributes.description[i]);
				}
			}
			// if ($(window).innerWidth() > 800) {
			// 	$('#middle').addClass('leftSide');	
			// }
			// $('#middle').addClass('atWork');	
			
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