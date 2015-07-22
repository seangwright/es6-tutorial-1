(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
	'use strict';

	usingFunctionWithThis();
	setTimeout(function () {
		usingArrowWithThis();
	}, 1500);

	function usingFunctionWithThis() {
		console.log("Using a normal function");

		var Bear = (function () {
			function Bear() {
				_classCallCheck(this, Bear);

				this.type = 'bear';
			}

			_createClass(Bear, [{
				key: 'says',
				value: function says(somethingToSay) {
					console.log(this.type + ' says ' + somethingToSay);
				}
			}, {
				key: 'saysLater',
				value: function saysLater(somethingToSay) {
					setTimeout(function () {
						// This will not work since 'this' will be undefined in the callback
						console.log(this.type + ' says ' + somethingToSay);
					}, 500);
				}
			}]);

			return Bear;
		})();

		var bear = new Bear();
		bear.says("Hello");
		bear.saysLater("Goodbye");
	}

	function usingArrowWithThis() {
		console.log("Using a normal function");

		var Bear = (function () {
			function Bear() {
				_classCallCheck(this, Bear);

				this.type = 'bear';
			}

			_createClass(Bear, [{
				key: 'says',
				value: function says(somethingToSay) {
					console.log(this.type + ' says ' + somethingToSay);
				}
			}, {
				key: 'saysLater',
				value: function saysLater(somethingToSay) {
					var _this = this;

					// This does work since the arrow function allows context of inner 'this'
					// to inherit context of outer 'this'
					setTimeout(function () {
						console.log(_this.type + ' says ' + somethingToSay);
					}, 500);
				}
			}]);

			return Bear;
		})();

		var bear = new Bear();
		bear.says("Hello");
		bear.saysLater("Goodbye");
	}
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlOi9kZXYvdHV0b3JpYWxzL2VzNi0xL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsQUFBQyxDQUFBLFlBQVk7QUFDWixhQUFZLENBQUM7O0FBRWIsc0JBQXFCLEVBQUUsQ0FBQztBQUN4QixXQUFVLENBQUMsWUFBWTtBQUN0QixvQkFBa0IsRUFBRSxDQUFDO0VBQ3JCLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRVQsVUFBUyxxQkFBcUIsR0FBRztBQUNoQyxTQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7O01BRWpDLElBQUk7QUFDRSxZQUROLElBQUksR0FDSzswQkFEVCxJQUFJOztBQUVSLFFBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ25COztnQkFISSxJQUFJOztXQUlMLGNBQUMsY0FBYyxFQUFFO0FBQ3BCLFlBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsY0FBYyxDQUFDLENBQUM7S0FDbkQ7OztXQUNRLG1CQUFDLGNBQWMsRUFBRTtBQUN6QixlQUFVLENBQUMsWUFBWTs7QUFFdEIsYUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyxjQUFjLENBQUMsQ0FBQztNQUNuRCxFQUFFLEdBQUcsQ0FBQyxDQUFBO0tBQ1A7OztVQVpJLElBQUk7OztBQWVWLE1BQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDdEIsTUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQixNQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQzFCOztBQUVELFVBQVMsa0JBQWtCLEdBQUc7QUFDN0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztNQUVqQyxJQUFJO0FBQ0UsWUFETixJQUFJLEdBQ0s7MEJBRFQsSUFBSTs7QUFFUixRQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNuQjs7Z0JBSEksSUFBSTs7V0FJTCxjQUFDLGNBQWMsRUFBRTtBQUNwQixZQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLGNBQWMsQ0FBQyxDQUFDO0tBQ25EOzs7V0FDUSxtQkFBQyxjQUFjLEVBQUU7Ozs7O0FBR3pCLGVBQVUsQ0FBQyxZQUFNO0FBQ2hCLGFBQU8sQ0FBQyxHQUFHLENBQUMsTUFBSyxJQUFJLEdBQUcsUUFBUSxHQUFHLGNBQWMsQ0FBQyxDQUFDO01BQ25ELEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDUjs7O1VBYkksSUFBSTs7O0FBZ0JWLE1BQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDdEIsTUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQixNQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQzFCO0NBQ0QsQ0FBQSxFQUFHLENBQUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHVzaW5nRnVuY3Rpb25XaXRoVGhpcygpO1xyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0dXNpbmdBcnJvd1dpdGhUaGlzKCk7XHJcblx0fSwgMTUwMCk7XHJcblxyXG5cdGZ1bmN0aW9uIHVzaW5nRnVuY3Rpb25XaXRoVGhpcygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiVXNpbmcgYSBub3JtYWwgZnVuY3Rpb25cIik7XHJcblx0XHRcclxuXHRcdGNsYXNzIEJlYXIge1xyXG5cdFx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0XHR0aGlzLnR5cGUgPSAnYmVhcic7XHJcblx0XHRcdH1cclxuXHRcdFx0c2F5cyhzb21ldGhpbmdUb1NheSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudHlwZSArICcgc2F5cyAnICsgc29tZXRoaW5nVG9TYXkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNheXNMYXRlcihzb21ldGhpbmdUb1NheSkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIG5vdCB3b3JrIHNpbmNlICd0aGlzJyB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGUgY2FsbGJhY2tcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudHlwZSArICcgc2F5cyAnICsgc29tZXRoaW5nVG9TYXkpO1xyXG5cdFx0XHRcdH0sIDUwMClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRsZXQgYmVhciA9IG5ldyBCZWFyKCk7XHJcblx0XHRiZWFyLnNheXMoXCJIZWxsb1wiKTtcclxuXHRcdGJlYXIuc2F5c0xhdGVyKFwiR29vZGJ5ZVwiKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHVzaW5nQXJyb3dXaXRoVGhpcygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiVXNpbmcgYSBub3JtYWwgZnVuY3Rpb25cIik7XHJcblx0XHRcclxuXHRcdGNsYXNzIEJlYXIge1xyXG5cdFx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0XHR0aGlzLnR5cGUgPSAnYmVhcic7XHJcblx0XHRcdH1cclxuXHRcdFx0c2F5cyhzb21ldGhpbmdUb1NheSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudHlwZSArICcgc2F5cyAnICsgc29tZXRoaW5nVG9TYXkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNheXNMYXRlcihzb21ldGhpbmdUb1NheSkge1xyXG5cdFx0XHRcdC8vIFRoaXMgZG9lcyB3b3JrIHNpbmNlIHRoZSBhcnJvdyBmdW5jdGlvbiBhbGxvd3MgY29udGV4dCBvZiBpbm5lciAndGhpcydcclxuXHRcdFx0XHQvLyB0byBpbmhlcml0IGNvbnRleHQgb2Ygb3V0ZXIgJ3RoaXMnXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnR5cGUgKyAnIHNheXMgJyArIHNvbWV0aGluZ1RvU2F5KTtcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCBiZWFyID0gbmV3IEJlYXIoKTtcclxuXHRcdGJlYXIuc2F5cyhcIkhlbGxvXCIpO1xyXG5cdFx0YmVhci5zYXlzTGF0ZXIoXCJHb29kYnllXCIpO1xyXG5cdH1cclxufSAoKSk7Il19
