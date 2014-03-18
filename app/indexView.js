define([
	'jquery'
	,'underscore'
	,'backbone'
	,'snap'
	,'parallax'
	,'text!templates/navTempl.html'
	,'model/SkillModel'
], function($, _, Backbone, Snap, Parallax, NavTempl, SkillModel) {
	var self;
	var IndexView = Backbone.View.extend({
		el: $('#container'),

		model: SkillModel,

		initialize: function() {
			this.render();
			self = this;
			// console.log('this model ' + Object.keys(SkillModel.attributes));
			this.self = this;
			$(window).scroll(this.detectScroll);
		},

		browserHeight: $(window).innerHeight(),
		browserWidth: $(window).innerWidth(),
		// rectLeft: [],
		// rectRight: [],
		rectanglesLeft: [],
		rectanglesRight: [],
		Elements_sec2Left: [],
		Elements_sec2Right: [],
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
			$('.section').css('height', this.browserHeight);
			var nav_template = _.template(NavTempl);
			$('#middle').html(nav_template);
			console.log('test model: ' + SkillModel.attributes.description[0]);
			$('.skill').last().after('<p>haha</p>');

			/********* Section1 ************/
			var s1Left = Snap('#svg1left');
			var s1Right = Snap('#svg1right');
			// var rectx, recty;
			var rectLeft = [], rectxLeft, rectyLeft, side1Left = [], side2Left = [], 
			    rectRight = [], rectxRight, rectyRight, side1Right = [], side2Right = [];
			for (var i = 0; i < 5; i++) {
				this.svg1xRange = Math.floor((this.browserWidth*0.4)/48); //console.log('svg1xRange: ' + svg1xRange);
				this.svg1yRange = Math.floor((this.browserHeight)/48);

				rectxLeft = Math.floor((Math.random()*this.svg1xRange) + 1)*48;
				rectyLeft = Math.random()*this.svg1yRange*48;
				rectLeft[i] = s1Left.rect(rectxLeft, rectyLeft, 12, 12);
				rectLeft[i].attr({
					'fill': '#a0a0a0'
				});
				side1Left[i] = s1Left.polygon(rectxLeft + 12, rectyLeft, rectxLeft + 16, rectyLeft + 6, rectxLeft + 16, rectyLeft + 18, rectxLeft + 12, rectyLeft + 12);
				side1Left[i].attr({
					'fill': '#ccc'
				});
				side2Left[i] = s1Left.polygon(rectxLeft, rectyLeft + 12, rectxLeft + 12, rectyLeft + 12, rectxLeft + 16, rectyLeft + 16, rectxLeft + 4, rectyLeft + 16);
				side2Left[i].attr({
					'fill': '#555'
				});
				this.rectanglesLeft[i] = s1Left.g(rectLeft[i], side1Left[i], side2Left[i]);

				rectxRight = Math.floor((Math.random()*this.svg1xRange) + 1)*48 + this.browserWidth*0.1;
				rectyRight = Math.random()*this.svg1yRange*48;
				rectRight[i] = s1Right.rect(rectxRight, rectyRight, 12, 12);
				rectRight[i].attr({
					'fill': '#6FB7F7'
				});
				side1Right[i] = s1Right.polygon(rectxRight + 12, rectyRight, rectxRight + 16, rectyRight + 6, rectxRight + 16, rectyRight + 18, rectxRight + 12, rectyRight + 12);
				side1Right[i].attr({
					'fill': '#6FF7E0'
				});
				side2Right[i] = s1Right.polygon(rectxRight, rectyRight + 12, rectxRight + 12, rectyRight + 12, rectxRight + 16, rectyRight + 16, rectxRight + 4, rectyRight + 16);
				side2Right[i].attr({
					'fill': '#6A4582'
				});
				this.rectanglesRight[i] = s1Right.g(rectRight[i], side1Right[i], side2Right[i]);

			}
			
			$('#svg1left').fadeIn(800);
			$('#svg1right').fadeIn(800);
			/********* Section2 ************/ 
			this.showSecTwo(this.svg1xRange, this.svg1yRange, this.browserWidth);

			/********* Section3 ************/ 
			this.showSecThree(this.svg1xRange, this.svg1yRange, this.browserWidth);
			
			/********* Section4 ************/ 
			this.showSecFour(this.svg1xRange, this.svg1yRange, this.browserWidth);
			

		}, //end render

		detectScroll: function() {
			// console.log('the rect ' + self.rectLeft);
			var browserHeight = $(window).innerHeight();
			// console.log('you are scrolling at ' + $(window).scrollTop());
			var changeDistance1 = browserHeight;
			var changeDistance2 = browserHeight*2;
			var changeDistance3 = browserHeight*3;

			var translateY1 = -$(window).scrollTop()*0.7;
			var translateY2 = -$(window).scrollTop()*0.5;
			/****** section 1 ******/
			if ($(window).scrollTop() < changeDistance1) { 
				self.rectanglesLeft.forEach(function(item, index){
					item.animate({'transform': 't0 ' + translateY1}, 1);
				});
				self.rectanglesRight.forEach(function(item, index){
					item.animate({'transform': 't0 ' + translateY1}, 1);
				});

				$('#svg2left').fadeOut();
				$('#svg2right').fadeOut();
			/****** section 2 ******/
			} else if (($(window).scrollTop() >= changeDistance1) && ($(window).scrollTop() < changeDistance2)) {
				self.showAndHide(2);
				self.Elements_sec2Left.forEach(function(item, index){
					item.animate({'transform': 't0 ' + translateY2}, 1);
				});
				self.Elements_sec2Right.forEach(function(item, index){
					item.animate({'transform': 't0 ' + translateY2}, 1);
				});
			/****** section 3 ******/
			} else if (($(window).scrollTop() >= changeDistance2) && ($(window).scrollTop() < changeDistance3)) {
				self.showAndHide(3);
			/****** section 4 ******/
			} else if (($(window).scrollTop() >= changeDistance3)) {
				self.showAndHide(4);

			} 
		},

		showSecTwo: function(svg1xRange, svg1yRange, browserWidth) {
			var s2Left = Snap('#svg2left');
			var s2Right = Snap('#svg2right');
			var triang1xLeft, triang1yLeft, triang1Left = [], triang2Left = [], triang3Left = [],
			    triang1Right = [], triang2Right = [], triang3Right = [];
			
			for (var i = 0; i < 5; i ++) {
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
		},

		showSecThree: function(svg1xRange, svg1yRange, browserWidth) {
			var s3Left = Snap('#svg3left');
			var s3Right = Snap('#svg3right');
			var triPrism1x, triPrism1y;
			var triPrism1Left = [], triPrism2Left = [], triPrism3Left = [], triPrism1Right = [], triPrism2Right = [], triPrism3Right = [];

			for (var i = 0; i < 5; i++) {
				triPrism1x = Math.floor(Math.random()*svg1xRange + 1)*48;
				triPrism1y = Math.floor(Math.random()*svg1yRange + 1)*48;
				triPrism1xR = Math.floor(Math.random()*svg1xRange + 1)*48 + browserWidth*0.1;
				triPrism1yR = Math.floor(Math.random()*svg1yRange + 1)*48;
				triPrism1Left[i] = s3Left.polygon(triPrism1x, triPrism1y, triPrism1x + 18, triPrism1y + 4, triPrism1x + 10, triPrism1y + 12);
				triPrism2Left[i] = s3Left.polygon(triPrism1x, triPrism1y, triPrism1x + 10, triPrism1y + 12, triPrism1x + 10, triPrism1y + 20, triPrism1x, triPrism1y + 8);
				triPrism3Left[i] = s3Left.polygon(triPrism1x + 10, triPrism1y + 12, triPrism1x + 18, triPrism1y + 4, triPrism1x + 18, triPrism1y + 12, triPrism1x + 10, triPrism1y + 20);

				triPrism1Right[i] = s3Right.polygon(triPrism1xR, triPrism1yR, triPrism1xR + 18, triPrism1yR + 4, triPrism1xR + 10, triPrism1yR + 12);
				triPrism2Right[i] = s3Right.polygon(triPrism1xR, triPrism1yR, triPrism1xR + 10, triPrism1yR + 12, triPrism1xR + 10, triPrism1yR + 20, triPrism1xR, triPrism1yR + 8);
				triPrism3Right[i] = s3Right.polygon(triPrism1xR + 10, triPrism1yR + 12, triPrism1xR + 18, triPrism1yR + 4, triPrism1xR + 18, triPrism1yR + 12, triPrism1xR + 10, triPrism1yR + 20);

				triPrism1Left[i].attr({
					'fill': '#8d8d8d'
				});
				triPrism2Left[i].attr({
					'fill': '#666'
				});
				triPrism3Left[i].attr({
					'fill': '#ccc'
				});
				triPrism1Right[i].attr({
					'fill': '#8d8d8d'
				});
				triPrism2Right[i].attr({
					'fill': '#666'
				});
				triPrism3Right[i].attr({
					'fill': '#ccc'
				});
			}
		},

		showSecFour: function(svg1xRange, svg1yRange, browserWidth) {
			var s4Left = Snap('#svg4left');
			var s4Right = Snap('#svg4right');
			var pentagonX, pentagonY;
			var pentaL = [], pentaSide1L = [], pentaSide2L = [],
			    pentaR = [], pentaSide1R = [], pentaSide2R = [];

			for (var i = 0; i < 5; i++) {
				pentagonX = Math.floor(Math.random()*svg1xRange + 1)*48;
				pentagonY = Math.floor(Math.random()*svg1yRange + 1)*48;
				pentagonXR = Math.floor(Math.random()*svg1xRange + 1)*48 + browserWidth*0.1;
				pentagonYR = Math.floor(Math.random()*svg1yRange + 1)*48;
				pentaL[i] = s4Left.polygon(pentagonX, pentagonY, pentagonX + 6, pentagonY - 7, pentagonX + 12, pentagonY + 1, pentagonX + 9, pentagonY + 10, pentagonX + 3, pentagonY + 9); 
				pentaSide1L[i] = s4Left.polygon(pentagonX + 6, pentagonY -7, pentagonX + 14, pentagonY -7, pentagonX + 19, pentagonY + 1, pentagonX + 12, pentagonY + 1);
				pentaSide2L[i] = s4Left.polygon(pentagonX + 12, pentagonY + 1, pentagonX + 19, pentagonY + 1, pentagonX + 15, pentagonY + 10, pentagonX + 9, pentagonY + 10);

				pentaR[i] = s4Right.polygon(pentagonXR, pentagonYR, pentagonXR + 6, pentagonYR - 7, pentagonXR + 12, pentagonYR + 1, pentagonXR + 9, pentagonYR + 10, pentagonXR + 3, pentagonYR + 9); 
				pentaSide1R[i] = s4Right.polygon(pentagonXR + 6, pentagonYR -7, pentagonXR + 14, pentagonYR -7, pentagonXR + 19, pentagonYR + 1, pentagonXR + 12, pentagonYR + 1);
				pentaSide2R[i] = s4Right.polygon(pentagonXR + 12, pentagonYR + 1, pentagonXR + 19, pentagonYR + 1, pentagonXR + 15, pentagonYR + 10, pentagonXR + 9, pentagonYR + 10);

				pentaL[i].attr({
					'fill': '#888'
				});
				pentaSide1L[i].attr({
					'fill': '#ccc'
				});
				pentaSide1L[i].attr({
					'fill': '#777'
				});
				pentaR[i].attr({
					'fill': '#888'
				});
				pentaSide1R[i].attr({
					'fill': '#ccc'
				});
				pentaSide1R[i].attr({
					'fill': '#777'
				});

			} //end for
		},

		showAndHide: function(toShow) {
			var toShowSec1 = '#svg' + toShow + 'left';
			var toShowSec2 = '#svg' + toShow + 'right';
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
			}
			
		}

	});

	var indexObj = new IndexView();

	return indexObj;
});