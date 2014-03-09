define([
	'jquery',
	'underscore',
	'backbone',
	'snap',
	'parallax'
], function($, _, Backbone, Snap, Parallax) {
	var IndexView = Backbone.View.extend({
		el: $('#container'),

		initialize: function() {
			// console.log('IndexView');
			this.render();
		},

		events: {
			
		},

		render: function() {
			var browserWidth = $(window).innerWidth();
			var browserHeight = $(window).innerHeight();
			// console.log('browserWidth: ' + browserWidth);
			// console.log('browserHeight: ' + browserHeight);
			$('.section').css('height', browserHeight);

			var s1Left = Snap('#svg1left');
			var s1Right = Snap('#svg1right');
			// var rectx, recty;
			var rectxLeft = [], rectyLeft = [], rectLeft = [], side1Left = [], side2Left = [], rectxRight = [], rectRight = [], side1Right = [], side2Right = [];
			for (var i = 0; i < 5; i++) {
				var svg1xRange = Math.floor((browserWidth*0.4)/48); //console.log('svg1xRange: ' + svg1xRange);
				var svg1yRange = Math.floor((browserHeight)/48);

				rectxLeft[i] = Math.floor((Math.random()*svg1xRange) + 1)*48;
				rectyLeft[i] = Math.random()*svg1yRange*48;
				rectLeft[i] = s1Left.rect(rectxLeft[i], rectyLeft[i], 18, 18);
				rectLeft[i].attr({
					'fill': '#a0a0a0'
				});
				side1Left[i] = s1Left.polygon(rectxLeft[i] + 18, rectyLeft[i], rectxLeft[i] + 24, rectyLeft[i] + 9, rectxLeft[i] + 24, rectyLeft[i] + 27, rectxLeft[i] + 18, rectyLeft[i] + 18);
				side1Left[i].attr({
					'fill': '#ccc'
				});
				side2Left[i] = s1Left.polygon(rectxLeft[i], rectyLeft[i] + 18, rectxLeft[i] + 18, rectyLeft[i] + 18, rectxLeft[i] + 24, rectyLeft[i] + 27, rectxLeft[i] + 6, rectyLeft[i] + 27);
				side2Left[i].attr({
					'fill': '#555'
				});
				
				rectxRight[i] = Math.floor((Math.random()*svg1xRange) + 1)*48 + browserWidth*0.1;
				rectRight[i] = s1Right.rect(rectxRight[i], rectyLeft[i], 18, 18);
				rectRight[i].attr({
					'fill': '#6FB7F7'
				});
				side1Right[i] = s1Right.polygon(rectxRight[i] + 18, rectyLeft[i], rectxRight[i] + 24, rectyLeft[i] + 9, rectxRight[i] + 24, rectyLeft[i] + 27, rectxRight[i] + 18, rectyLeft[i] + 18);
				side1Right[i].attr({
					'fill': '#6FF7E0'
				});
				side2Right[i] = s1Right.polygon(rectxRight[i], rectyLeft[i] + 18, rectxRight[i] + 18, rectyLeft[i] + 18, rectxRight[i] + 24, rectyLeft[i] + 27, rectxRight[i] + 6, rectyLeft[i] + 27);
				side2Right[i].attr({
					'fill': '#6A4582'
				});

			}
			
			

		}


	});

	var indexObj = new IndexView();

	return indexObj;
});