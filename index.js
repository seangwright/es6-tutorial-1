(function () {
	'use strict';

	usingFunction();
	usingClass();

	function usingFunction() {
		console.log("Using a function to create an object");
		function Bear() {
			if (this) {
				this.color = "Brown";
				console.log("Inside a " + this.color + " bear");

				this.sayHello = function () {
					console.log("Hello!");
				}
			} else {
				console.log("Inside a bear");
			}
		}

		// 'this' does not exist inside Bear() with this call because
		// no 'new' operator was used
		Bear();

		let brownBear = new Bear();

		console.log(brownBear.color);
		brownBear.sayHello();
	}

	function usingClass() {
		console.log("Using a class to create an object");
		class Bear {
			constructor() {
				this.color = "Brown";

				console.log("Inside a " + this.color + " bear");
			}

			sayHello() {
				console.log("Hello!");
			}
		}
		
		// Cannot call class constructors without 'new' keyword
		// Bear();
		
		let brownBear = new Bear();

		console.log(brownBear.color);
		brownBear.sayHello();
	}
} ());