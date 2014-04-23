define([
	'jquery'
	,'underscore'
	,'backbone'
	,'text!templates/navTempl.html'
	,'text!templates/workTempl.html'
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
			var $middlePart = $('#middle'); 
			_.each(WorkModel.attributes, function(obj, index){ 
				self.$el.append(WorkTempl);
				$('.workBlock').eq(index-1).attr('id', obj.title);
				// var listItemHtml = '<li>' + obj.items.join('</li><li>') + '</li>';
				// workBlocks.eq(index-1).find('ul').append(listItemHtml);
				$('.workBlock').eq(index-1).find('.workDes').append('<span>' + obj.items.join(' + ') + '</span>');
				$('.workBlock').eq(index-1).find('img').attr('src', obj.imgSrc).attr('alt', obj.title);
				if (index%2 === 0) {
					$('.workBlock').eq(index-1).addClass('rightSide');
				}
			});

			$('#container').fadeOut();
			$(window).scrollTop(0);
			if ( $middlePart.html() == '') {
				var nav_template = _.template(NavTempl);
				$middlePart.html(nav_template);	
				for (var i = 0; i < SkillModel.attributes.description.length; i++) {
					$('#skill' + i).html(SkillModel.attributes.description[i]);
				}
			}
			
			$('#worksContainer').fadeIn();
			$('#skillWrapInner').attr('class', 's5');
			
			$(window).unbind('scroll', this.detectScroll);
			var url_location = window.location.hash;
			if (($(window).innerWidth() < 800) && (url_location == '#works')) {
				$middlePart.css('top','0px');
			}

			var workBlocks = this.getElementsByClassName(document.body, 'workBlock');
			$(workBlocks).each(function(index, item){
				var targetEle = document.getElementById(item.getAttribute('id'));
				targetEle.addEventListener('touchstart', self.touchFocusWork, false);
				// targetEle.addEventListener('touchleave', self.touchUnfocusWork, false);
			});
			
		},

		getElementsByClassName: function (node, classname) {
			var a = [];
		    var re = new RegExp('(^| )'+classname+'( |$)');
		    var els = node.getElementsByTagName("*");
		    for(var i=0,j=els.length; i<j; i++)
		        if(re.test(els[i].className))a.push(els[i]);
		    return a;
		},

		touchFocusWork: function(e) {
			// alert($(e.target).parents('.workBlock').attr('id'));
			if ($(e.target).parents('.workBlock').hasClass('focus')) {
				$(e.target).parents('.workBlock').removeClass('focus');
			} else {
				$(e.target).parents('.workBlock').addClass('focus');
			}
		},

		touchUnfocusWork: function(e) {
			window.setTimeout(function() {
				$('.workBlock .darkenLayer').css('opacity',1);
			}, 1000);
			
		}
		
	});

	return WorksView;
});