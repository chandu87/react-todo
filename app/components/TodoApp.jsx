var React= require('react');
var TodoList = require('TodoList');


var TodoApp = React.createClass({
  getInitialState:function(){
    return{
      todolist : [
          {id : 1,text:'washing clothes'},
          {id: 2,text:'dinner with friend'}
      ]
    };

  },
  render:function(){
    var {todolist}= this.state;

    return(
      <div>

        <h1>ToDo App</h1>
        <TodoList todos={todolist}/>
      </div>
    );
  }
});

module.exports= TodoApp;
