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
			console.log('browserWidth: ' + browserWidth);
			console.log('browserHeight: ' + browserHeight);
			$('.section').css('height', browserHeight);

			//first svg
			var s = Snap('#svg');
			var triangles = [];
			var trianglesGroup = s.group().attr({
				'data-depth': "0.40",
				'class': 'layer'
			});
			var x1, y1, x2, y2, x3, y3;
			for (var i = 0; i < 10; i++) {
				x1 = Math.random()*(browserWidth-10) + 1;
				y1 = Math.random()*(browserHeight-10) + 1;
				x2 = x1 + 20;
				y2 = y1;
				x3 = x1 + 10;
				y3 = y1 + 15;
				triangles[i] = s.polygon([x1, y1, x2, y2, x3, y3]);
				triangles[i].attr({
					fill: '#888',
					opacity: 0
				});
				trianglesGroup.add(triangles[i]);
			}
			
			var mouseX, mouseY, directionX, directionY, tstr;
			triangles.forEach(function(item){
				item.animate({opacity: 1}, 600, function(){});
			});

			$('#svg').parallax({
				calibrateX: false,
				calibrateY: false,
				invertX: true,
				invertY: true,
				limitX: false,
				limitY: 10,
				scalarX: 2,
				scalarY: 8,
				frictionX: 0.2,
				frictionX: 0.8
			});

			var s1 = Snap('#svg1');
			var rect = [];
			var rectX, rectY;
			for (var i = 0; i < 10; i ++) {
				rectX = Math.random()*(browserWidth-10) + 1;
				rectY = Math.random()*(browserHeight-10) + 1;
				rect[i] = s1.rect(rectX, rectY, 10, 10);
				rect[i].attr({
					fill: '#71a5d0'
				});
			}
			

		}


		// doParallax: function() {
		// 	console.log('test events');
		// }

	});

	var indexObj = new IndexView();

	return indexObj;
});