'use strict';

var React = require('react'),
		Button = require('./button');

var App = React.createClass({
	render : function() {
		return (
			<div>
				<h1>Hi dude</h1>
				<Button></Button>
				<Button></Button>
			</div>
		);
	}
});

module.exports = App;
