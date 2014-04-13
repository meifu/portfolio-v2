define([
	'jquery'
	,'underscore'
	,'backbone'
	,'snap'
], function($, _, Backbone, Snap) {

	var Sec4Elements = Backbone.View.extend({
		el: '',
		initialize: function () {
			// console.log('sec4 view');
			this.render();
			// $(window).scroll(this.detectScroll);
		},
		Elements_sec4Left: [],
		Elements_sec4Right: [],
		render: function() {
			var halfElementsNumbers = 0;
			var browserWidth = $(window).innerWidth();
			var browserHeight = $(window).innerHeight();
			if (browserWidth > 1600) {
				halfElementsNumbers = 10;
			} else if ( (browserWidth > 1350) && (browserWidth <= 1600) ) {
				halfElementsNumbers = 8;
			} else {
				halfElementsNumbers = 5;
			}
			var s4Left = Snap('#svg4left');
			var s4Right = Snap('#svg4right');
			var pentagonX, pentagonY;
			var pentaL = [], pentaSide1L = [], pentaSide2L = [],
			    pentaR = [], pentaSide1R = [], pentaSide2R = [];
			var svg1xRange = Math.floor((browserWidth*0.4)/48); //console.log('svg1xRange: ' + svg1xRange);
			var svg1yRange = Math.floor((browserHeight)/48);

			for (var i = 0; i < halfElementsNumbers; i++) {
				pentagonX = Math.floor(Math.random()*svg1xRange + 1)*48;
				pentagonY = Math.floor(Math.random()*svg1yRange + 1)*48;
				pentagonXR = Math.floor(Math.random()*svg1xRange + 1)*48 + browserWidth*0.1;
				pentagonYR = Math.floor(Math.random()*svg1yRange + 1)*48;
				pentaL[i] = s4Left.polygon(pentagonX, pentagonY, pentagonX + 6, pentagonY - 7, pentagonX + 12, pentagonY + 1, pentagonX + 9, pentagonY + 10, pentagonX + 3, pentagonY + 9); 
				pentaSide1L[i] = s4Left.polygon(pentagonX + 6, pentagonY -7, pentagonX + 13, pentagonY -7, pentagonX + 19, pentagonY + 1, pentagonX + 12, pentagonY + 1);
				pentaSide2L[i] = s4Left.polygon(pentagonX + 12, pentagonY + 1, pentagonX + 19, pentagonY + 1, pentagonX + 15, pentagonY + 10, pentagonX + 9, pentagonY + 10);
				this.Elements_sec4Left[i] = s4Left.g(pentaL[i], pentaSide1L[i], pentaSide2L[i]);

				pentaR[i] = s4Right.polygon(pentagonXR, pentagonYR, pentagonXR + 6, pentagonYR - 7, pentagonXR + 12, pentagonYR + 1, pentagonXR + 9, pentagonYR + 10, pentagonXR + 3, pentagonYR + 9); 
				pentaSide1R[i] = s4Right.polygon(pentagonXR + 6, pentagonYR -7, pentagonXR + 13, pentagonYR -7, pentagonXR + 19, pentagonYR + 1, pentagonXR + 12, pentagonYR + 1);
				pentaSide2R[i] = s4Right.polygon(pentagonXR + 12, pentagonYR + 1, pentagonXR + 19, pentagonYR + 1, pentagonXR + 15, pentagonYR + 10, pentagonXR + 9, pentagonYR + 10);
				this.Elements_sec4Right[i] = s4Right.g(pentaR[i], pentaSide1R[i], pentaSide2R[i]);

				pentaL[i].attr({
					'fill': '#888'
				});
				pentaSide1L[i].attr({
					'fill': '#eee'
				});
				pentaSide2L[i].attr({
					'fill': '#3a3a3a'
				});
				pentaR[i].attr({
					'fill': '#888'
				});
				pentaSide1R[i].attr({
					'fill': '#eee'
				});
				pentaSide2R[i].attr({
					'fill': '#3a3a3a'
				});

			} //end for

			this.hoverChange(this.Elements_sec4Left);
			this.hoverChange(this.Elements_sec4Right);

		},

		scrolling: function(translateY4) {
			this.Elements_sec4Left.forEach(function(item, index){
				item.animate({'transform': 't0 ' + translateY4}, 1);
			});
			this.Elements_sec4Right.forEach(function(item, index){
				item.animate({'transform': 't0 ' + translateY4}, 1);
			});
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

	return Sec4Elements;

});