(function () {
	// Tests for the toolbar
	exports.tests = {
		"/account/login": [
			{
				"ident": "toolbar_visible",
				"test": {
					"type": "function",
					"function" : function () {
						return document.getElementById("toolbar");
					}
				}
			},
			{
				"ident": "login_visible",
				"test": {
					"type": "function",
					"function" : function () {
						return document.getElementsByClassName("login")
					}
				}
			}
		]
	};
}).call(this);