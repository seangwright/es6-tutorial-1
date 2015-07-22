(function () {
	'use strict';

	usingConst();
	
	function usingConst() {
		const year = "2015";
		
		year = 2016; // Not allowed since year is a const
	}
} ());