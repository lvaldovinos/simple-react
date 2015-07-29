'use strict';

var React = require('react'),
		Button = require('./button');

var App = React.createClass({displayName: "App",
	render : function() {
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "Hi dude"), 
				React.createElement(Button, null), 
				React.createElement(Button, null)
			)
		);
	}
});

module.exports = App;
