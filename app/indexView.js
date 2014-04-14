define([
	'jquery'
	,'underscore'
	,'backbone'
	,'snap'
	// ,'parallax'
	,'text!templates/navTempl.html'
	,'model/SkillModel'
	,'sec1view'
	,'sec2view'
	,'sec3view'
	,'sec4view'
], function($, _, Backbone, Snap, NavTempl, SkillModel, Sec1Elements, Sec2Elements, Sec3Elements, Sec4Elements) {
	var self;
	var IndexView = Backbone.View.extend({
		el: $('#container'),

		model: SkillModel,

		initialize: function() {
			this.render();
			// console.log('this model ' + Object.keys(SkillModel.attributes));
			self = this;
			
			this.s1_elem = new Sec1Elements();
			this.s2_elem = new Sec2Elements();
			this.s3_elem = new Sec3Elements();
			this.s4_elem = new Sec4Elements();
		},

		browserHeight: $(window).innerHeight(),
		browserWidth: $(window).innerWidth(),
		
		s1_elem: '',
		s2_elem: '',
		s3_elem: '',
		s4_elem: '',
		svg1xRange: 0,
		svg1yRange: 0,
		events: {
			// 'scroll .section': 'detectScroll'
		},

		render: function() {
			this.browserWidth = $(window).innerWidth();
			this.browserHeight = $(window).innerHeight();
			// console.log('browserWidth: ' + browserWidth);
			// console.log('browserHeight: ' + browserHeight);
			$('#worksContainer').fadeOut();
			$('#container').fadeIn().css('height', this.browserHeight*4);
			$('.section').css('height', this.browserHeight).fadeIn();
			
			var nav_template = _.template(NavTempl);
			$('#middle').html(nav_template);
			$('#middle').removeClass('leftSide');
			// console.log('test model: ' + SkillModel.attributes.description[0]);
			for (var i = 0; i < SkillModel.attributes.description.length; i++) {
				$('#skill' + i).html(SkillModel.attributes.description[i]);
			}
			$('#skillWrapInner').addClass('s1');
			this.svg1xRange = Math.floor((this.browserWidth*0.4)/48); //console.log('svg1xRange: ' + svg1xRange);
			this.svg1yRange = Math.floor((this.browserHeight)/48);
			
			$('#emailLink').click(function(){
				if ($('#emailContent').hasClass('open')) {
					$('#emailContent').removeClass('open');
				} else {
					$('#emailContent').addClass('open');
				}
			});
			$('#sectionHTML').find('.topicPic').fadeIn(900);
			// $(window).scroll(this.detectScroll);
			$(window).bind('scroll', this.detectScroll);
			
		}, //end render

		detectScroll: function() {
			// console.log('the rect ' + self.rectLeft);
			var browserHeight = $(window).innerHeight();
			// console.log('you are scrolling at ' + $(window).scrollTop());
			var bufferPercent = 0.5;
			var changeDistance1 = browserHeight*(1-bufferPercent);
			var changeDistance2 = browserHeight*(2-bufferPercent);
			var changeDistance3 = browserHeight*(3-bufferPercent);

			var translateY1 = -$(window).scrollTop()*1.6;
			var translateY2 = -$(window).scrollTop()*1.4 + browserHeight;
			var translateY3 = -($(window).scrollTop()*1.2) + browserHeight*2;
			var translateY4 = -$(window).scrollTop()*1 + browserHeight*3;

			self.checkSkills($(window).scrollTop(), browserHeight);
			
			/****** section 1 ******/
			if ($(window).scrollTop() < changeDistance1) { 
				self.s1_elem.scrolling(translateY1);
				self.changeSectionPosition('#sectionCSS');
				$('#sectionCSS').find('.topicPic').css('display', 'none');
			/****** section 2 ******/
			} else if (($(window).scrollTop() >= changeDistance1) && ($(window).scrollTop() < changeDistance2)) {
				self.s2_elem.scrolling(translateY2);
				self.showAndHide(2);
				self.changeSectionPosition('#sectionJS');
				$('#sectionCSS').find('.topicPic').fadeIn(900);
			/****** section 3 ******/
			} else if (($(window).scrollTop() >= changeDistance2) && ($(window).scrollTop() < changeDistance3)) {
				self.s3_elem.scrolling(translateY3);
				self.showAndHide(3);
				self.changeSectionPosition('#sectionOTHER');
				$('#sectionJS').find('.topicPic').fadeIn(900);
			/****** section 4 ******/
			} else if (($(window).scrollTop() >= changeDistance3)) {
				self.s4_elem.scrolling(translateY4);
				self.showAndHide(4);
			} 
		},

		showAndHide: function(toShow) {
			var toShowSec1 = '#svg' + toShow + 'left';
			var toShowSec2 = '#svg' + toShow + 'right';
			//next sec
			var toHideSec1 = '#svg' + (toShow + 1) + 'left';
			var toHideSec2 = '#svg' + (toShow + 1) + 'right';

			if ($(toShowSec1).css('display') == 'none') {
				$(toShowSec1).fadeIn();
				$(toShowSec2).fadeIn();
			}

			//hide sec svg
			if ($(toHideSec1) !== undefined) {
				if ($(toHideSec1).css('display') !== 'none') {
					$(toHideSec1).fadeOut();
					$(toHideSec2).fadeOut();
				}
				//previous sec
				if ((toShow - 1) > 0) {
					var toHideSec3 =  '#svg' + (toShow - 1) + 'left';
					var toHideSec4 =  '#svg' + (toShow - 1) + 'right';
					$(toHideSec3).fadeOut();
					$(toHideSec4).fadeOut();
				}
			}
			
		}, 

		checkSkills: function(scrollTop, browserHeight) {
			if (scrollTop < browserHeight*0.7) { 
				$('#skillWrapInner').attr('class', 's1');
			} else if ((scrollTop >= browserHeight*0.7) && (scrollTop < browserHeight*1.7)) {
				$('#skillWrapInner').attr('class', 's2');
			} else if ((scrollTop >= browserHeight*1.7) && (scrollTop < browserHeight*2.7)) {
				$('#skillWrapInner').attr('class', 's3');
			} else if ((scrollTop >= browserHeight*2.7)) {
				$('#skillWrapInner').attr('class', 's4');
			}

		},

		changeSectionPosition: function(nextSec) {
			$('.section').css('position','relative');
			// if ($(current).css('position') == 'relative') {
				$(nextSec).css({'position':'fixed', 'top': '0'});
			// }
		},

		hoverChange: function(ele) {
			var changingAttr = {fill: 'transparent',
								stroke: '#ddd',
								strokeWidth: 1}
			ele.forEach(function(obj, index){
				obj.mouseover(function(){
					// obj.animate({transform: 'r180,' + obj.getBBox().cx + ',' + obj.getBBox().cy}, 200);
					// console.log('getbbox ' + obj.getBBox().cx);
					if (obj.select('rect') !== null) {
						obj.select('rect').animate(changingAttr, 400);
					}
					// obj.selectAll('polygon').attr(changingAttr);
					// console.log('tetete ' + obj.selectAll('polygon'));
					obj.selectAll('polygon').forEach(function(item, index) {
						item.animate(changingAttr, 400);
					});
				});
			});
			
		}

	});

	// var indexObj = new IndexView();
	// return indexObj;
	return IndexView;
});