(function () {
	var page, system, time, tests, address, _i, _n, _ref, _tests, _test, _x;

	page = require("webpage").create();
	system = require("system");

	if( system.args.length === 1 ) {
		console.log("Usage: tests.js <URL>");
		phantom.exit();
	}

	time = Date.now();
	address = system.args[1];

	tests = [
		require("./tests/Toolbar.js").tests
	];

	for( _i = 0; _i < tests.length; _i++ ) {
		_ref = tests[_i];
		for( _n in _ref ) {
			console.log("Opening URL: " + address + _n);
			page.open(address + _n, function (status) {
				_tests = _ref[_n];
				// We need to now iterate over the testing array
				for( _x = 0; _x < _tests.length; _x++ ) {
					_test = _tests[_x].test;
					switch( _test.type ) {
						case "function":
							var check = page.evaluate(_test.function);

							if( check ) {
								console.log("Function " + _tests[_x].ident + " returned with success");
							} else {
								// Render the page on fail
								page.render("./caps/" + _tests[_x].ident + ".png");
								// Notify that user
								console.log("Function " + _tests[_x].ident + " failed");
							}
						break;
					}
				}
			});
		}
	}

	// phantom.exit();
}).call(this);