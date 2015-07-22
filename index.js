(function () {
	'use strict';

	usingVar();
	usingLet();

	function usingVar() {
		console.log("Using var");
		var fish = "Shark";
		
		console.log(fish);
		
		if (true) {
			var fish = "Tuna"; // This a re-definition of the fish variable
			var monster = "Squid"; // var does not have block level scoping
			
			console.log(fish);
			console.log(monster);
		}
		
		console.log(fish);
		console.log(monster); // We still have access to monster here
	}

	function usingLet() {
		console.log("Using let");
		let animal = "grizzly";

		console.log(animal);

		if (true) {
			let animal = "bear"; // This variable is scoped to this block
			let monster = "Yeti"; // let does have block level scoping

			console.log(animal);
			console.log(monster);
		}

		console.log(animal);
		console.log(monster); // We do not have a defined variable for monster here
	}
} ());