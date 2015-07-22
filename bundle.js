(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
	'use strict';

	usingJoin();
	usingTemplateStrings();

	function usingJoin() {
		console.log("Using Join & string concat");
		var bears = ['panda', 'black', 'polar'].join('\n');

		console.log(bears);

		var bearType = 'black';
		var sound = 'raaaaawwwrr';

		console.log("The " + bearType + " bear says " + sound);
	}

	function usingTemplateStrings() {
		console.log("Using template strings");
		var bears = '\n\t\t\tgrizzly\n\t\t\tpanda\n\t\t\tblack\n\t\t\t';

		console.log(bears);

		var bearType = 'black';
		var sound = 'raaaaawwwrr';

		console.log('The ' + bearType + ' says ' + sound);
	}
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlOi9kZXYvdHV0b3JpYWxzL2VzNi0xL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxBQUFDLENBQUEsWUFBWTtBQUNaLGFBQVksQ0FBQzs7QUFFYixVQUFTLEVBQUUsQ0FBQztBQUNaLHFCQUFvQixFQUFFLENBQUM7O0FBRXZCLFVBQVMsU0FBUyxHQUFHO0FBQ3BCLFNBQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUMxQyxNQUFJLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVuRCxTQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVuQixNQUFJLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDdkIsTUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDOztBQUUxQixTQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQ3ZEOztBQUVELFVBQVMsb0JBQW9CLEdBQUc7QUFDL0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3RDLE1BQUksS0FBSyxzREFJUCxDQUFDOztBQUVILFNBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRW5CLE1BQUksUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN2QixNQUFJLEtBQUssR0FBRyxhQUFhLENBQUM7O0FBRTFCLFNBQU8sQ0FBQyxHQUFHLFVBQVEsUUFBUSxjQUFTLEtBQUssQ0FBRyxDQUFDO0VBQzdDO0NBQ0QsQ0FBQSxFQUFHLENBQUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHVzaW5nSm9pbigpO1xyXG5cdHVzaW5nVGVtcGxhdGVTdHJpbmdzKCk7XHJcblxyXG5cdGZ1bmN0aW9uIHVzaW5nSm9pbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiVXNpbmcgSm9pbiAmIHN0cmluZyBjb25jYXRcIik7XHJcblx0XHRsZXQgYmVhcnMgPSBbJ3BhbmRhJywgJ2JsYWNrJywgJ3BvbGFyJ10uam9pbignXFxuJyk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKGJlYXJzKTtcclxuXHRcdFxyXG5cdFx0bGV0IGJlYXJUeXBlID0gJ2JsYWNrJztcclxuXHRcdGxldCBzb3VuZCA9ICdyYWFhYWF3d3dycic7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwiVGhlIFwiICsgYmVhclR5cGUgKyBcIiBiZWFyIHNheXMgXCIgKyBzb3VuZCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB1c2luZ1RlbXBsYXRlU3RyaW5ncygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiVXNpbmcgdGVtcGxhdGUgc3RyaW5nc1wiKTtcclxuXHRcdGxldCBiZWFycyA9IGBcclxuXHRcdFx0Z3JpenpseVxyXG5cdFx0XHRwYW5kYVxyXG5cdFx0XHRibGFja1xyXG5cdFx0XHRgO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhiZWFycyk7XHJcblx0XHRcclxuXHRcdGxldCBiZWFyVHlwZSA9ICdibGFjayc7XHJcblx0XHRsZXQgc291bmQgPSAncmFhYWFhd3d3cnInO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhgVGhlICR7YmVhclR5cGV9IHNheXMgJHtzb3VuZH1gKTtcclxuXHR9XHJcbn0gKCkpOyJdfQ==
