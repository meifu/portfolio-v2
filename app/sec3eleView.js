define([
	'jquery'
	,'underscore'
	,'backbone'
	,'snap'
], function($, _, Backbone, Snap) {

	var Sec3Elements = Backbone.View.extend({
		el: '',
		initialize: function () {
			// console.log('sec3 view');
			this.render();
			// $(window).scroll(this.detectScroll);
		},
		// browserHeight: $(window).innerHeight(),
		// browserWidth: $(window).innerWidth(),
		Elements_sec3Left: [],
		Elements_sec3Right: [],
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
			var s3Left = Snap('#svg3left');
			var s3Right = Snap('#svg3right');
			var triPrism1x, triPrism1y;
			var triPrism1Left = [], triPrism2Left = [], triPrism3Left = [], triPrism1Right = [], triPrism2Right = [], triPrism3Right = [];
			var svg1xRange = Math.floor((browserWidth*0.4)/48); //console.log('svg1xRange: ' + svg1xRange);
			var svg1yRange = Math.floor((browserHeight)/48);

			for (var i = 0; i < halfElementsNumbers; i++) {
				triPrism1x = Math.floor(Math.random()*svg1xRange + 1)*48;
				triPrism1y = Math.floor(Math.random()*svg1yRange + 1)*48;
				triPrism1xR = Math.floor(Math.random()*svg1xRange + 1)*48 + browserWidth*0.1;
				triPrism1yR = Math.floor(Math.random()*svg1yRange + 1)*48;
				triPrism1Left[i] = s3Left.polygon(triPrism1x, triPrism1y, triPrism1x + 18, triPrism1y + 4, triPrism1x + 10, triPrism1y + 12);
				triPrism2Left[i] = s3Left.polygon(triPrism1x, triPrism1y, triPrism1x + 10, triPrism1y + 12, triPrism1x + 10, triPrism1y + 20, triPrism1x, triPrism1y + 8);
				triPrism3Left[i] = s3Left.polygon(triPrism1x + 10, triPrism1y + 12, triPrism1x + 18, triPrism1y + 4, triPrism1x + 18, triPrism1y + 12, triPrism1x + 10, triPrism1y + 20);
				this.Elements_sec3Left[i] = s3Left.g(triPrism1Left[i], triPrism2Left[i], triPrism3Left[i]);

				triPrism1Right[i] = s3Right.polygon(triPrism1xR, triPrism1yR, triPrism1xR + 18, triPrism1yR + 4, triPrism1xR + 10, triPrism1yR + 12);
				triPrism2Right[i] = s3Right.polygon(triPrism1xR, triPrism1yR, triPrism1xR + 10, triPrism1yR + 12, triPrism1xR + 10, triPrism1yR + 20, triPrism1xR, triPrism1yR + 8);
				triPrism3Right[i] = s3Right.polygon(triPrism1xR + 10, triPrism1yR + 12, triPrism1xR + 18, triPrism1yR + 4, triPrism1xR + 18, triPrism1yR + 12, triPrism1xR + 10, triPrism1yR + 20);
				this.Elements_sec3Right[i] = s3Right.g(triPrism1Right[i], triPrism2Right[i], triPrism3Right[i]);

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

			this.hoverChange(this.Elements_sec3Left);
			this.hoverChange(this.Elements_sec3Right);
		},

		scrolling: function(translateY3) {
			this.Elements_sec3Left.forEach(function(item, index){
				item.animate({'transform': 't0 ' + translateY3}, 1);
			});
			this.Elements_sec3Right.forEach(function(item, index){
				item.animate({'transform': 't0 ' + translateY3}, 1);
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

	return Sec3Elements;

});