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

			/********* Section1 ************/
			var s1Left = Snap('#svg1left');
			var s1Right = Snap('#svg1right');
			// var rectx, recty;
			var rectxLeft, rectyLeft, rectLeft = [], side1Left = [], side2Left = [], 
			    rectxRight, rectyRight, rectRight = [], side1Right = [], side2Right = [];
			for (var i = 0; i < 5; i++) {
				var svg1xRange = Math.floor((browserWidth*0.4)/48); //console.log('svg1xRange: ' + svg1xRange);
				var svg1yRange = Math.floor((browserHeight)/48);

				rectxLeft = Math.floor((Math.random()*svg1xRange) + 1)*48;
				rectyLeft = Math.random()*svg1yRange*48;
				rectLeft[i] = s1Left.rect(rectxLeft, rectyLeft, 18, 18);
				rectLeft[i].attr({
					'fill': '#a0a0a0'
				});
				side1Left[i] = s1Left.polygon(rectxLeft + 18, rectyLeft, rectxLeft + 24, rectyLeft + 9, rectxLeft + 24, rectyLeft + 27, rectxLeft + 18, rectyLeft + 18);
				side1Left[i].attr({
					'fill': '#ccc'
				});
				side2Left[i] = s1Left.polygon(rectxLeft, rectyLeft + 18, rectxLeft + 18, rectyLeft + 18, rectxLeft + 24, rectyLeft + 27, rectxLeft + 6, rectyLeft + 27);
				side2Left[i].attr({
					'fill': '#555'
				});
				
				rectxRight = Math.floor((Math.random()*svg1xRange) + 1)*48 + browserWidth*0.1;
				rectyRight = Math.random()*svg1yRange*48;
				rectRight[i] = s1Right.rect(rectxRight, rectyRight, 18, 18);
				rectRight[i].attr({
					'fill': '#6FB7F7'
				});
				side1Right[i] = s1Right.polygon(rectxRight + 18, rectyRight, rectxRight + 24, rectyRight + 9, rectxRight + 24, rectyRight + 27, rectxRight + 18, rectyRight + 18);
				side1Right[i].attr({
					'fill': '#6FF7E0'
				});
				side2Right[i] = s1Right.polygon(rectxRight, rectyRight + 18, rectxRight + 18, rectyRight + 18, rectxRight + 24, rectyRight + 27, rectxRight + 6, rectyRight + 27);
				side2Right[i].attr({
					'fill': '#6A4582'
				});

			}

			/********* Section2 ************/ 
			var s2Left = Snap('#svg2left');
			var s2Right = Snap('#svg2right');
			var triang1xLeft, triang1yLeft, triang1Left = [], triang2Left = [], triang3Left = [],
			    triang1Right = [], triang2Right = [], triang3Right = [];
			
			for (var i = 0; i < 5; i ++) {
				triang1xLeft = Math.floor(Math.random()*svg1xRange + 1)*48;
				triang1yLeft = Math.floor(Math.random()*svg1yRange + 1)*48;
				triang1xRight = Math.floor(Math.random()*svg1xRange + 1)*48/* + browserWidth*0.6*/;
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

			}

			/********* Section3 ************/ 
			var s3Left = Snap('#svg3left');
			var s3Right = Snap('#svg3right');
			var triPrism1x, triPrism1y;
			var triPrism1 = [], triPrism2 = [], triPrism3 = [];

			for (var i = 0; i < 5; i++) {
				triPrism1x = Math.floor(Math.random()*svg1xRange + 1)*48;
				triPrism1y = Math.floor(Math.random()*svg1yRange + 1)*48;
				triPrism1[i] = s3Left.polygon(triPrism1x, triPrism1y, triPrism1x + 18, triPrism1y + 4, triPrism1x + 10, triPrism1y + 12);
				triPrism2[i] = s3Left.polygon(triPrism1x, triPrism1y, triPrism1x + 10, triPrism1y + 12, triPrism1x + 10, triPrism1y + 20, triPrism1x, triPrism1y + 8);
				triPrism3[i] = s3Left.polygon(triPrism1x + 10, triPrism1y + 12, triPrism1x + 18, triPrism1y + 4, triPrism1x + 18, triPrism1y + 12, triPrism1x + 10, triPrism1y + 20);
				triPrism1[i].attr({
					'fill': '#8d8d8d'
				});
				triPrism2[i].attr({
					'fill': '#666'
				});
				triPrism3[i].attr({
					'fill': '#ccc'
				});
			}
			
			/********* Section4 ************/ 
			var s4Left = Snap('#svg4left');
			var s4Right = Snap('#svg4right');
			var pentagonX, pentagonY;
			var penta = [], pentaSide1 = [], pentaSide2 = [];
			pentagonX = Math.floor(Math.random()*svg1xRange + 1)*48;
			pentagonY = Math.floor(Math.random()*svg1yRange + 1)*48;
			penta[0] = s4Left.polygon(pentagonX, pentagonY, pentagonX + 6, pentagonY -5, pentagonX + 9, pentagonY, pentagonX + 7, pentagonY + 8, pentagonX + 3, pentagonY + 8); 
			penta[0].attr({
				'fill': '#ccc'
			});

		}



	});

	var indexObj = new IndexView();

	return indexObj;
});