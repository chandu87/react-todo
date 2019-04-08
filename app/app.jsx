var React= require('react');
var ReactDOM=require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
const Actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(()=>{
	console.log('New State', store.getState());
})
store.dispatch(Actions.addTodo('Clean living room'));
store.dispatch(Actions.setSearchText('room'));
store.dispatch(Actions.toggleShowCompleted());
//Load Foundation
$(document).foundation(); 

//App CSS adding custom styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<TodoApp/>,
					document.getElementById('app')
				);
