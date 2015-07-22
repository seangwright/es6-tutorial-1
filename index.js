(function () {
	'use strict';

	usingFunctionWithThis();
	setTimeout(function () {
		usingArrowWithThis();
	}, 1500);

	function usingFunctionWithThis() {
		console.log("Using a normal function");
		
		class Bear {
			constructor() {
				this.type = 'bear';
			}
			says(somethingToSay) {
				console.log(this.type + ' says ' + somethingToSay);
			}
			saysLater(somethingToSay) {
				setTimeout(function () {
					// This will not work since 'this' will be undefined in the callback
					console.log(this.type + ' says ' + somethingToSay);
				}, 500)
			}
		}
		
		let bear = new Bear();
		bear.says("Hello");
		bear.saysLater("Goodbye");
	}

	function usingArrowWithThis() {
		console.log("Using a normal function");
		
		class Bear {
			constructor() {
				this.type = 'bear';
			}
			says(somethingToSay) {
				console.log(this.type + ' says ' + somethingToSay);
			}
			saysLater(somethingToSay) {
				// This does work since the arrow function allows context of inner 'this'
				// to inherit context of outer 'this'
				setTimeout(() => {
					console.log(this.type + ' says ' + somethingToSay);
				}, 500);
			}
		}
		
		let bear = new Bear();
		bear.says("Hello");
		bear.saysLater("Goodbye");
	}
} ());