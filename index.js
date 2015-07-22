(function () {
	'use strict';

	usingNormalObjects();
	usingDestructuring();

	function usingNormalObjects() {
		console.log("Using normal ES5 object literal syntax");
		
		let bearType = 'black';
		let sound = 'raaaaawwwrr';
		
		let bear = { bearType: bearType, sound: sound };
		
		console.log(`Here is our bear: ${bear.bearType}, ${bear.sound}`);
		
		bear.bearType = "brown";
		bear.sound = "zzZzzzZzz";
		
		bearType = bear.bearType;
		sound = bear.sound;
		
		console.log(`Our ${bearType} bear says ${sound}`);
	}

	function usingDestructuring() {
		console.log("Using object literal destructuring");
		
		let bearType = 'black';
		let sound = 'raaaaawwwrr';
		
		let bear = { bearType, sound };
		
		console.log(`Here is our bear: ${bear.bearType}, ${bear.sound}`);
		
		bear.bearType = "brown";
		bear.sound = "zzZzzzZzz";
		
		// Because code blocks begin with a curly brace, statements must not begin with one.
		// We must wrap this destructuring in ()
		({ bearType, sound } = bear);
		
		console.log(`Our ${bearType} bear says ${sound}`);
	}
} ());