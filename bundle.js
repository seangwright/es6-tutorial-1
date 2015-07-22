(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
	'use strict';

	usingNormalFunction();
	usingArrowFunction();

	function usingNormalFunction() {
		console.log("Using a normal function");

		var goodBears = ['panda', 'black', 'grizzly', 'polar'].filter(function (value, index, array) {
			if (value != 'grizzly' && value != 'polar') return true;
			return false;
		});

		console.log(goodBears);
	}

	function usingArrowFunction() {
		console.log("Using an arrow function");

		var goodBears = ['panda', 'black', 'grizzly', 'polar'].filter(function (bear) {
			return bear != 'grizzly' && bear != 'polar';
		});

		console.log(goodBears);
	}
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlOi9kZXYvdHV0b3JpYWxzL2VzNi0xL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxBQUFDLENBQUEsWUFBWTtBQUNaLGFBQVksQ0FBQzs7QUFFYixvQkFBbUIsRUFBRSxDQUFDO0FBQ3RCLG1CQUFrQixFQUFFLENBQUM7O0FBRXJCLFVBQVMsbUJBQW1CLEdBQUc7QUFDOUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztBQUV2QyxNQUFJLFNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFTLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNGLE9BQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLElBQUksT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ3hELFVBQU8sS0FBSyxDQUFDO0dBQ2IsQ0FBQyxDQUFDOztBQUVILFNBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDdkI7O0FBRUQsVUFBUyxrQkFBa0IsR0FBRztBQUM3QixTQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7O0FBRXZDLE1BQUksU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSTtVQUFNLElBQUksSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLE9BQU87R0FBQyxDQUFDLENBQUM7O0FBRWhILFNBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDdkI7Q0FDRCxDQUFBLEVBQUcsQ0FBRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dXNpbmdOb3JtYWxGdW5jdGlvbigpO1xyXG5cdHVzaW5nQXJyb3dGdW5jdGlvbigpO1xyXG5cclxuXHRmdW5jdGlvbiB1c2luZ05vcm1hbEZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJVc2luZyBhIG5vcm1hbCBmdW5jdGlvblwiKTtcclxuXHRcdFxyXG5cdFx0dmFyIGdvb2RCZWFycyA9IFsncGFuZGEnLCAnYmxhY2snLCAnZ3JpenpseScsICdwb2xhciddLmZpbHRlcihmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcblx0XHRcdGlmICh2YWx1ZSAhPSAnZ3JpenpseScgJiYgdmFsdWUgIT0gJ3BvbGFyJykgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhnb29kQmVhcnMpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdXNpbmdBcnJvd0Z1bmN0aW9uKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJVc2luZyBhbiBhcnJvdyBmdW5jdGlvblwiKTtcclxuXHRcdFxyXG5cdFx0dmFyIGdvb2RCZWFycyA9IFsncGFuZGEnLCAnYmxhY2snLCAnZ3JpenpseScsICdwb2xhciddLmZpbHRlcigoYmVhcikgPT4gKGJlYXIgIT0gJ2dyaXp6bHknICYmIGJlYXIgIT0gJ3BvbGFyJykpO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhnb29kQmVhcnMpO1xyXG5cdH1cclxufSAoKSk7Il19
