'use strict';

var React = require('react');

var Button = React.createClass({
	getInitialState : function() {
		return {
			count : 0
		};
	},
	render : function() {
		return (
			<div>
				<p>you have clicked me {this.state.count}</p>
				<button onClick={this.handleClick}>Click me!</button>
			</div>
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
