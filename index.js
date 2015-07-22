(function () {
	'use strict';

	usingOrOperator();
	usingDefaultParameters();

	function usingOrOperator() {
		console.log("Using the || operator for defaulting null params");

		function say(something) {
			something = something || 'nothing';
			console.log(`Let's say ${something}`);
		}

		say("Hello");
		say();

		function sayAlot(thingsToSay) {
			// arguments is an object, not an array!
			var allThings = Array.prototype.slice.call(arguments);
			
			console.log(`Let's say ${allThings.join(', ')}`);
		}
		
		sayAlot("Hello", "Goodbye", "... What else is there to say?");
	}

	function usingDefaultParameters() {
		console.log("Using ES6 default parameters");

		function say(something = "nothing") {
			console.log(`Let's say ${something}`);
		}

		say("Hello");
		say();
		
		function sayAlot(...thingsToSay) {
			// thingsToSay is an array!
			console.log(`Let's say ${thingsToSay.join(', ')}`);
		}
		
		sayAlot("Hello", "Goodbye", "... What else is there to say?");
	}
} ());