(function () {
	'use strict';

	usingExtends();

	function usingExtends() {
		console.log("Using a extends to 'inherit' from a class");
		class Bear {
			constructor(color) {
				this.color = color;
			}

			sayHello() {
				console.log("Hello, I am a " + this.color + " bear");
			}
		}
		
		let brownBear = new Bear("brown");

		brownBear.sayHello();
		
		class BlackBear extends Bear {
			constructor() {
				super("black");
			}
			
			eatBerries(numberOfBerries) {
				if (numberOfBerries < 10) {
					console.log("I'm still hungry");
				} else {
					console.log("Nom nom nom");
				}
			}
		}
		
		let blackBear = new BlackBear();
		
		blackBear.sayHello();
		blackBear.eatBerries(4);
		blackBear.eatBerries(30);
	}
} ());