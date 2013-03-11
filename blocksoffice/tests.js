(function () {
	var page, system, time, tests, address, _i, _n, _ref, _test;

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
			_test = _ref[_n];
			page.open(address + _n, function (status) {
				console.log("Opening address " + address + _n);
				if( status !== "success" ) {
					console.log("Failed to load the address " + _n + ", reason: " + status);
					page.render("./caps/fail_" + _test.ident + ".jpg");
				} else {
					if( typeof _test.test === "function" ) {
						_test.test.apply(this, [page]);
					} else {
						switch( _test.test.type ) {
							case "element_exists":
								page.evaluate(function (_test) {
									var element;
									if( _test.test.element.indexOf("#") !== -1 ) {
										element = document.getElementById(_test.test.element.substr(1));
									} else {
										element = document.getElementsByTagName(_test.test.element)[0];
									}
									if( element ) {
										console.log("Element " + _test.test.element + " exists on the page");
									} else {
										console.log("Element " + _test.test.element + " does not exist where expected");
										page.render("./caps/" + _test.ident + ".jpg");
									}
								}, _test);
							break;
							case "loadspeed":
								time = Date.now() - time;
								console.log("Loading time " + time + " msec");
							break;
						}
					}
				}
			});
		}
	}
}).call(this);