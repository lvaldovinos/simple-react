'use strict';

var React = require('react'),
		AppClass = require('./main'),
		App = React.createFactory(AppClass);

React.render(App(), document.getElementById('application'));
