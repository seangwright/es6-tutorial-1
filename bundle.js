(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
	'use strict';

	usingNormalObjects();
	usingDestructuring();

	function usingNormalObjects() {
		console.log("Using normal ES5 object literal syntax");

		var bearType = 'black';
		var sound = 'raaaaawwwrr';

		var bear = { bearType: bearType, sound: sound };

		console.log('Here is our bear: ' + bear.bearType + ', ' + bear.sound);

		bear.bearType = "brown";
		bear.sound = "zzZzzzZzz";

		bearType = bear.bearType;
		sound = bear.sound;

		console.log('Our ' + bearType + ' bear says ' + sound);
	}

	function usingDestructuring() {
		console.log("Using object literal destructuring");

		var bearType = 'black';
		var sound = 'raaaaawwwrr';

		var bear = { bearType: bearType, sound: sound };

		console.log('Here is our bear: ' + bear.bearType + ', ' + bear.sound);

		bear.bearType = "brown";
		bear.sound = "zzZzzzZzz";

		// Because code blocks begin with a curly brace, statements must not begin with one.
		// We must wrap this destructuring in ()
		bearType = bear.bearType;
		sound = bear.sound;

		console.log('Our ' + bearType + ' bear says ' + sound);
	}
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlOi9kZXYvdHV0b3JpYWxzL2VzNi0xL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxBQUFDLENBQUEsWUFBWTtBQUNaLGFBQVksQ0FBQzs7QUFFYixtQkFBa0IsRUFBRSxDQUFDO0FBQ3JCLG1CQUFrQixFQUFFLENBQUM7O0FBRXJCLFVBQVMsa0JBQWtCLEdBQUc7QUFDN0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOztBQUV0RCxNQUFJLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDdkIsTUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDOztBQUUxQixNQUFJLElBQUksR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDOztBQUVoRCxTQUFPLENBQUMsR0FBRyx3QkFBc0IsSUFBSSxDQUFDLFFBQVEsVUFBSyxJQUFJLENBQUMsS0FBSyxDQUFHLENBQUM7O0FBRWpFLE1BQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLE1BQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDOztBQUV6QixVQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN6QixPQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7QUFFbkIsU0FBTyxDQUFDLEdBQUcsVUFBUSxRQUFRLG1CQUFjLEtBQUssQ0FBRyxDQUFDO0VBQ2xEOztBQUVELFVBQVMsa0JBQWtCLEdBQUc7QUFDN0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDOztBQUVsRCxNQUFJLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDdkIsTUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDOztBQUUxQixNQUFJLElBQUksR0FBRyxFQUFFLFFBQVEsRUFBUixRQUFRLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxDQUFDOztBQUUvQixTQUFPLENBQUMsR0FBRyx3QkFBc0IsSUFBSSxDQUFDLFFBQVEsVUFBSyxJQUFJLENBQUMsS0FBSyxDQUFHLENBQUM7O0FBRWpFLE1BQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLE1BQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDOzs7O0FBSXRCLFVBQVEsR0FBWSxJQUFJLENBQXhCLFFBQVE7QUFBRSxPQUFLLEdBQUssSUFBSSxDQUFkLEtBQUs7O0FBRWxCLFNBQU8sQ0FBQyxHQUFHLFVBQVEsUUFBUSxtQkFBYyxLQUFLLENBQUcsQ0FBQztFQUNsRDtDQUNELENBQUEsRUFBRyxDQUFFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR1c2luZ05vcm1hbE9iamVjdHMoKTtcclxuXHR1c2luZ0Rlc3RydWN0dXJpbmcoKTtcclxuXHJcblx0ZnVuY3Rpb24gdXNpbmdOb3JtYWxPYmplY3RzKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJVc2luZyBub3JtYWwgRVM1IG9iamVjdCBsaXRlcmFsIHN5bnRheFwiKTtcclxuXHRcdFxyXG5cdFx0bGV0IGJlYXJUeXBlID0gJ2JsYWNrJztcclxuXHRcdGxldCBzb3VuZCA9ICdyYWFhYWF3d3dycic7XHJcblx0XHRcclxuXHRcdGxldCBiZWFyID0geyBiZWFyVHlwZTogYmVhclR5cGUsIHNvdW5kOiBzb3VuZCB9O1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhgSGVyZSBpcyBvdXIgYmVhcjogJHtiZWFyLmJlYXJUeXBlfSwgJHtiZWFyLnNvdW5kfWApO1xyXG5cdFx0XHJcblx0XHRiZWFyLmJlYXJUeXBlID0gXCJicm93blwiO1xyXG5cdFx0YmVhci5zb3VuZCA9IFwienpaenp6Wnp6XCI7XHJcblx0XHRcclxuXHRcdGJlYXJUeXBlID0gYmVhci5iZWFyVHlwZTtcclxuXHRcdHNvdW5kID0gYmVhci5zb3VuZDtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coYE91ciAke2JlYXJUeXBlfSBiZWFyIHNheXMgJHtzb3VuZH1gKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHVzaW5nRGVzdHJ1Y3R1cmluZygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiVXNpbmcgb2JqZWN0IGxpdGVyYWwgZGVzdHJ1Y3R1cmluZ1wiKTtcclxuXHRcdFxyXG5cdFx0bGV0IGJlYXJUeXBlID0gJ2JsYWNrJztcclxuXHRcdGxldCBzb3VuZCA9ICdyYWFhYWF3d3dycic7XHJcblx0XHRcclxuXHRcdGxldCBiZWFyID0geyBiZWFyVHlwZSwgc291bmQgfTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coYEhlcmUgaXMgb3VyIGJlYXI6ICR7YmVhci5iZWFyVHlwZX0sICR7YmVhci5zb3VuZH1gKTtcclxuXHRcdFxyXG5cdFx0YmVhci5iZWFyVHlwZSA9IFwiYnJvd25cIjtcclxuXHRcdGJlYXIuc291bmQgPSBcInp6Wnp6elp6elwiO1xyXG5cdFx0XHJcblx0XHQvLyBCZWNhdXNlIGNvZGUgYmxvY2tzIGJlZ2luIHdpdGggYSBjdXJseSBicmFjZSwgc3RhdGVtZW50cyBtdXN0IG5vdCBiZWdpbiB3aXRoIG9uZS5cclxuXHRcdC8vIFdlIG11c3Qgd3JhcCB0aGlzIGRlc3RydWN0dXJpbmcgaW4gKClcclxuXHRcdCh7IGJlYXJUeXBlLCBzb3VuZCB9ID0gYmVhcik7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKGBPdXIgJHtiZWFyVHlwZX0gYmVhciBzYXlzICR7c291bmR9YCk7XHJcblx0fVxyXG59ICgpKTsiXX0=
