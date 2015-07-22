(function () {
	'use strict';

	usingJoin();
	usingTemplateStrings();

	function usingJoin() {
		console.log("Using Join & string concat");
		let bears = ['panda', 'black', 'polar'].join('\n');
		
		console.log(bears);
		
		let bearType = 'black';
		let sound = 'raaaaawwwrr';
		
		console.log("The " + bearType + " bear says " + sound);
	}

	function usingTemplateStrings() {
		console.log("Using template strings");
		let bears = `
			grizzly
			panda
			black
			`;
		
		console.log(bears);
		
		let bearType = 'black';
		let sound = 'raaaaawwwrr';
		
		console.log(`The ${bearType} says ${sound}`);
	}
} ());