'use strict';

var React = require('react');

var Button = React.createClass({displayName: "Button",
	getInitialState : function() {
		return {
			count : 0
		};
	},
	render : function() {
		return (
			React.createElement("div", null, 
				React.createElement("p", null, "you have clicked me ", this.state.count), 
				React.createElement("button", {onClick: this.handleClick}, "Click me!")
			)
		);
	},
	handleClick : function(e) {
		e.preventDefault();
		this.setState({
			count : this.state.count + 1
		});
	}
});

module.exports = Button;
