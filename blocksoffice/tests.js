(function () {
	var page, system, time, tests, address, _n, _ref;

	page = require("webpage").create();
	system = require("system");

	if( system.args.length === 1 ) {
		console.log("Usage: tests.js <URL>");
		phantom.exit();
	}

	time = Date.now();
	address = system.args[1];

	tests = {
		"/account/login": {
			"ident": "account_login",
			"test": "loadspeed"
		}
	};

	for( _i in tests ) {
		_ref = tests[_i];
		page.open(address + _i, function (status) {
			if( status !== "success" ) {
				console.log("Failed to load the address " + _i + ", reason: " + status);
				page.render("fail_" + _ref.ident);
			} else {
				switch( _ref.test ) {
					case "loadspeed":
						time = Date.now() - time;
						console.log("Loading time " + time + " msec");
					break;
				}
			}
		});
	}

	phantom.exit();
}).call(this);