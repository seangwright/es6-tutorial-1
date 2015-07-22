(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
	'use strict';

	usingOrOperator();
	usingDefaultParameters();

	function usingOrOperator() {
		console.log("Using the || operator for defaulting null params");

		function say(something) {
			something = something || 'nothing';
			console.log('Let\'s say ' + something);
		}

		say("Hello");
		say();

		function sayAlot(thingsToSay) {
			// arguments is an object, not an array!
			var allThings = Array.prototype.slice.call(arguments);

			console.log('Let\'s say ' + allThings.join(', '));
		}

		sayAlot("Hello", "Goodbye", "... What else is there to say?");
	}

	function usingDefaultParameters() {
		console.log("Using ES6 default parameters");

		function say() {
			var something = arguments.length <= 0 || arguments[0] === undefined ? "nothing" : arguments[0];

			console.log('Let\'s say ' + something);
		}

		say("Hello");
		say();

		function sayAlot() {
			for (var _len = arguments.length, thingsToSay = Array(_len), _key = 0; _key < _len; _key++) {
				thingsToSay[_key] = arguments[_key];
			}

			// thingsToSay is an array!
			console.log('Let\'s say ' + thingsToSay.join(', '));
		}

		sayAlot("Hello", "Goodbye", "... What else is there to say?");
	}
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlOi9kZXYvdHV0b3JpYWxzL2VzNi0xL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxBQUFDLENBQUEsWUFBWTtBQUNaLGFBQVksQ0FBQzs7QUFFYixnQkFBZSxFQUFFLENBQUM7QUFDbEIsdUJBQXNCLEVBQUUsQ0FBQzs7QUFFekIsVUFBUyxlQUFlLEdBQUc7QUFDMUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDOztBQUVoRSxXQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDdkIsWUFBUyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUM7QUFDbkMsVUFBTyxDQUFDLEdBQUcsaUJBQWMsU0FBUyxDQUFHLENBQUM7R0FDdEM7O0FBRUQsS0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsS0FBRyxFQUFFLENBQUM7O0FBRU4sV0FBUyxPQUFPLENBQUMsV0FBVyxFQUFFOztBQUU3QixPQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRXRELFVBQU8sQ0FBQyxHQUFHLGlCQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUcsQ0FBQztHQUNqRDs7QUFFRCxTQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO0VBQzlEOztBQUVELFVBQVMsc0JBQXNCLEdBQUc7QUFDakMsU0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOztBQUU1QyxXQUFTLEdBQUcsR0FBd0I7T0FBdkIsU0FBUyx5REFBRyxTQUFTOztBQUNqQyxVQUFPLENBQUMsR0FBRyxpQkFBYyxTQUFTLENBQUcsQ0FBQztHQUN0Qzs7QUFFRCxLQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDYixLQUFHLEVBQUUsQ0FBQzs7QUFFTixXQUFTLE9BQU8sR0FBaUI7cUNBQWIsV0FBVztBQUFYLGVBQVc7Ozs7QUFFOUIsVUFBTyxDQUFDLEdBQUcsaUJBQWMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRyxDQUFDO0dBQ25EOztBQUVELFNBQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7RUFDOUQ7Q0FDRCxDQUFBLEVBQUcsQ0FBRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dXNpbmdPck9wZXJhdG9yKCk7XHJcblx0dXNpbmdEZWZhdWx0UGFyYW1ldGVycygpO1xyXG5cclxuXHRmdW5jdGlvbiB1c2luZ09yT3BlcmF0b3IoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIlVzaW5nIHRoZSB8fCBvcGVyYXRvciBmb3IgZGVmYXVsdGluZyBudWxsIHBhcmFtc1wiKTtcclxuXHJcblx0XHRmdW5jdGlvbiBzYXkoc29tZXRoaW5nKSB7XHJcblx0XHRcdHNvbWV0aGluZyA9IHNvbWV0aGluZyB8fCAnbm90aGluZyc7XHJcblx0XHRcdGNvbnNvbGUubG9nKGBMZXQncyBzYXkgJHtzb21ldGhpbmd9YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2F5KFwiSGVsbG9cIik7XHJcblx0XHRzYXkoKTtcclxuXHJcblx0XHRmdW5jdGlvbiBzYXlBbG90KHRoaW5nc1RvU2F5KSB7XHJcblx0XHRcdC8vIGFyZ3VtZW50cyBpcyBhbiBvYmplY3QsIG5vdCBhbiBhcnJheSFcclxuXHRcdFx0dmFyIGFsbFRoaW5ncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZyhgTGV0J3Mgc2F5ICR7YWxsVGhpbmdzLmpvaW4oJywgJyl9YCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHNheUFsb3QoXCJIZWxsb1wiLCBcIkdvb2RieWVcIiwgXCIuLi4gV2hhdCBlbHNlIGlzIHRoZXJlIHRvIHNheT9cIik7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB1c2luZ0RlZmF1bHRQYXJhbWV0ZXJzKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJVc2luZyBFUzYgZGVmYXVsdCBwYXJhbWV0ZXJzXCIpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIHNheShzb21ldGhpbmcgPSBcIm5vdGhpbmdcIikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhgTGV0J3Mgc2F5ICR7c29tZXRoaW5nfWApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNheShcIkhlbGxvXCIpO1xyXG5cdFx0c2F5KCk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIHNheUFsb3QoLi4udGhpbmdzVG9TYXkpIHtcclxuXHRcdFx0Ly8gdGhpbmdzVG9TYXkgaXMgYW4gYXJyYXkhXHJcblx0XHRcdGNvbnNvbGUubG9nKGBMZXQncyBzYXkgJHt0aGluZ3NUb1NheS5qb2luKCcsICcpfWApO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzYXlBbG90KFwiSGVsbG9cIiwgXCJHb29kYnllXCIsIFwiLi4uIFdoYXQgZWxzZSBpcyB0aGVyZSB0byBzYXk/XCIpO1xyXG5cdH1cclxufSAoKSk7Il19
