define([
	'jquery'
	,'underscore'
	,'backbone'
	,'snap'
], function($, _, Backbone, Snap) {

	var Sec2Elements = Backbone.View.extend({
		el: '#sectionCSS',
		topicImg: '',
		initialize: function () {
			// console.log('sec2 view');
			this.render();
			this.topicImg = this.$el.find('.topicPic').eq(0);
			// $(window).scroll(this.detectScroll);
		},
		// browserHeight: $(window).innerHeight(),
		// browserWidth: $(window).innerWidth(),
		Elements_sec2Left: [],
		Elements_sec2Right: [],
		render: function() {
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
			var s2Left = Snap('#svg2left');
			var s2Right = Snap('#svg2right');
			var triang1xLeft, triang1yLeft, triang1Left = [], triang2Left = [], triang3Left = [],
			    triang1Right = [], triang2Right = [], triang3Right = [];
			var svg1xRange = Math.floor((browserWidth*0.4)/48); //console.log('svg1xRange: ' + svg1xRange);
			var svg1yRange = Math.floor((1.2*browserHeight)/48);
			for (var i = 0; i < halfElementsNumbers; i ++) {
				triang1xLeft = Math.floor(Math.random()*svg1xRange + 1)*48;
				triang1yLeft = Math.floor(Math.random()*svg1yRange + 1)*48;
				triang1xRight = Math.floor(Math.random()*svg1xRange + 1)*48 + browserWidth*0.1;
				triang1yRight = Math.floor(Math.random()*svg1yRange + 1)*48;
				triang1Left[i] = s2Left.polygon(triang1xLeft, triang1yLeft, triang1xLeft + 12, triang1yLeft - 17, triang1xLeft + 12, triang1yLeft - 3);
				triang2Left[i] = s2Left.polygon(triang1xLeft + 12, triang1yLeft - 17, triang1xLeft + 12, triang1yLeft - 3, triang1xLeft + 22, triang1yLeft + 5);
				triang3Left[i] = s2Left.polygon(triang1xLeft, triang1yLeft, triang1xLeft + 14, triang1yLeft - 3, triang1xLeft + 22, triang1yLeft + 5);
				triang1Left[i].attr({
					'fill': '#8d8d8d'
				});
				triang2Left[i].attr({
					'fill': '#ccc'
				});
				triang3Left[i].attr({
					'fill': '#525252'
				});
				this.Elements_sec2Left[i] = s2Left.g(triang1Left[i], triang2Left[i], triang3Left[i]);

				triang1Right[i] = s2Right.polygon(triang1xRight, triang1yRight, triang1xRight + 12, triang1yRight - 17, triang1xRight + 12, triang1yRight - 3);
				triang2Right[i] = s2Right.polygon(triang1xRight + 12, triang1yRight - 17, triang1xRight + 12, triang1yRight - 3, triang1xRight + 22, triang1yRight + 5);
				triang3Right[i] = s2Right.polygon(triang1xRight, triang1yRight, triang1xRight + 14, triang1yRight - 3, triang1xRight + 22, triang1yRight + 5);
				triang1Right[i].attr({
					'fill': '#8d8d8d'
				});
				triang2Right[i].attr({
					'fill': '#ccc'
				});
				triang3Right[i].attr({
					'fill': '#525252'
				});
				this.Elements_sec2Right[i] = s2Right.g(triang1Right[i], triang2Right[i], triang3Right[i]);

			}

			this.hoverChange(this.Elements_sec2Left);
			this.hoverChange(this.Elements_sec2Right);
		},

		scrolling: function(translateY2) {
			this.Elements_sec2Left.forEach(function(item, index){
				item.animate({'transform': 't0 ' + translateY2}, 1);
			});
			this.Elements_sec2Right.forEach(function(item, index){
				item.animate({'transform': 't0 ' + translateY2}, 1);
			});
			this.topicImg.animate({
				'bottom': -translateY2*0.9,
				'left': -translateY2*0.4
			}, 1);
		},

		hoverChange: function(ele) {
			var changingAttr = {fill: 'transparent',
								stroke: '#ddd',
								strokeWidth: 1}
			ele.forEach(function(obj, index){
				obj.mouseover(function(){
					obj.selectAll('polygon').forEach(function(item, index) {
						item.animate(changingAttr, 400);
					});
				});
			});
		}

	});

	return Sec2Elements;

});