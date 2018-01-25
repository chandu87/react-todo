var React= require('react');
var ReactDOM=require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
//Load Foundation
$(document).foundation();

//App CSS adding custom styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<TodoApp/>,
					document.getElementById('app')
				);
