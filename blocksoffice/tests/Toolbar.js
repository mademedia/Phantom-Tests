(function () {
	// Tests for the toolbar
	exports.tests = {
		"/account/login": {
			"ident": "toolbar_visible",
			"test": {
				"type": "element_exists",
				"element": "#toolbar"
			}
		}
	};
}).call(this);