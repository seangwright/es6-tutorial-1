(function () {
	'use strict';

	usingNormalFunction();
	usingArrowFunction();

	function usingNormalFunction() {
		console.log("Using a normal function");
		
		var goodBears = ['panda', 'black', 'grizzly', 'polar'].filter(function(value, index, array) {
			if (value != 'grizzly' && value != 'polar') return true;
			return false;
		});
		
		console.log(goodBears);
	}

	function usingArrowFunction() {
		console.log("Using an arrow function");
		
		var goodBears = ['panda', 'black', 'grizzly', 'polar'].filter((bear) => (bear != 'grizzly' && bear != 'polar'));
		
		console.log(goodBears);
	}
} ());