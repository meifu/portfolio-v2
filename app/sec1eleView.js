define([
	'jquery'
	,'underscore'
	,'backbone'
	,'snap'
], function($, _, Backbone, Snap) {
	// var self;
	var Sec1Elements = Backbone.View.extend({
		el: '#sectionHTML',
		topicImg: '',
		initialize: function () {
			// console.log('sec1 view');
			this.render();
			this.topicImg = this.$el.find('.topicPic').eq(0);
			// $(window).scroll(this.detectScroll);
		},
		// browserHeight: $(window).innerHeight(),
		// browserWidth: $(window).innerWidth(),
		Elements_sec1Left: [],
		Elements_sec1Right: [],
		render: function() {
			// console.log('topic img ' + this.topicImg);
			var halfElementsNumbers = 0; 
			var browserWidth = $(window).innerWidth();
			var browserHeight = $(window).innerHeight();
			if (browserWidth > 1600) {
				halfElementsNumbers = 12;
			} else if ( (browserWidth > 1350) && (browserWidth <= 1600) ) {
				halfElementsNumbers = 10;
			} else {
				halfElementsNumbers = 7;
			}
			/********* Section1 ************/
			var s1Left = Snap('#svg1left');
			var s1Right = Snap('#svg1right');
			// var rectx, recty;
			var svg1xRange = Math.floor((browserWidth*0.4)/48); //console.log('svg1xRange: ' + svg1xRange);
			var svg1yRange = Math.floor((1.2*browserHeight)/48);
			var rectLeft = [], rectxLeft, rectyLeft, side1Left = [], side2Left = [], 
			    rectRight = [], rectxRight, rectyRight, side1Right = [], side2Right = [];
			for (var i = 0; i < halfElementsNumbers; i++) {
				rectxLeft = Math.floor((Math.random()*svg1xRange) + 1)*48;
				rectyLeft = Math.random()*svg1yRange*48;
				rectLeft[i] = s1Left.rect(rectxLeft, rectyLeft, 12, 12);
				rectLeft[i].attr({
					'fill': '#a0a0a0'
				});
				side1Left[i] = s1Left.polygon(rectxLeft + 12, rectyLeft, rectxLeft + 16, rectyLeft + 6, rectxLeft + 16, rectyLeft + 18, rectxLeft + 12, rectyLeft + 12);
				side1Left[i].attr({
					'fill': '#ccc'
				});
				side2Left[i] = s1Left.polygon(rectxLeft, rectyLeft + 12, rectxLeft + 12, rectyLeft + 12, rectxLeft + 16, rectyLeft + 18, rectxLeft + 4, rectyLeft + 18);
				side2Left[i].attr({
					'fill': '#555'
				});
				this.Elements_sec1Left[i] = s1Left.g(rectLeft[i], side1Left[i], side2Left[i]);

				rectxRight = Math.floor((Math.random()*svg1xRange) + 1)*48 + browserWidth*0.1;
				rectyRight = Math.random()*svg1yRange*48;
				rectRight[i] = s1Right.rect(rectxRight, rectyRight, 12, 12);
				rectRight[i].attr({
					'fill': '#a0a0a0'
				});
				side1Right[i] = s1Right.polygon(rectxRight + 12, rectyRight, rectxRight + 16, rectyRight + 6, rectxRight + 16, rectyRight + 18, rectxRight + 12, rectyRight + 12);
				side1Right[i].attr({
					'fill': '#ccc'
				});
				side2Right[i] = s1Right.polygon(rectxRight, rectyRight + 12, rectxRight + 12, rectyRight + 12, rectxRight + 16, rectyRight + 18, rectxRight + 4, rectyRight + 18);
				side2Right[i].attr({
					'fill': '#555'
				});
				this.Elements_sec1Right[i] = s1Right.g(rectRight[i], side1Right[i], side2Right[i]);

			}
			
			$('#svg1left').fadeIn(800);
			$('#svg1right').fadeIn(800);

			this.hoverChange(this.Elements_sec1Left);
			this.hoverChange(this.Elements_sec1Right);
		},

		scrolling: function(translateY1) {
			
			// var opacityChange1 = (1 - ($(window).scrollTop()*1.5)/browserHeight);
			this.Elements_sec1Left.forEach(function(item, index){
				// item.animate({'transform': 't0 ' + translateY1, 'opacity': opacityChange1}, 1);
				item.animate({'transform': 't0 ' + translateY1}, 1);
			});
			this.Elements_sec1Right.forEach(function(item, index){
				item.animate({'transform': 't0 ' + translateY1}, 1);
			});

			if ($('#svg1left').css('display') == 'none') {
				$('#svg1left').fadeIn();
				$('#svg1right').fadeIn();
			}

			// $('#svg2left').fadeOut();
			// $('#svg2right').fadeOut();
			
			this.topicImg.animate({
				'bottom': -translateY1*0.9,
				'left': -translateY1*0.4
			}, 1);
		},

		hoverChange: function(ele) {
			var changingAttr = {fill: 'transparent',
								stroke: '#ddd',
								strokeWidth: 1}
			ele.forEach(function(obj, index){
				obj.mouseover(function(){
					if (obj.select('rect') !== null) {
						obj.select('rect').animate(changingAttr, 400);
					}
					obj.selectAll('polygon').forEach(function(item, index) {
						item.animate(changingAttr, 400);
					});
				});
			});
		}

	});
	return Sec1Elements;
});