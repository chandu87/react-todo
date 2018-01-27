var React= require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');


var TodoApp = React.createClass({
  getInitialState:function(){
    return{
      todolist : [
          {id : 1,text:'washing clothes'},
          {id: 2,text:'dinner with friend'}
      ]
    };

  },
handleTodo :function(text){
  alert('handletodo:'+text);
},
  render:function(){
    var {todolist}= this.state;

    return(
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">

         <h1>TODO APP</h1>
         <TodoList todos={todolist}/>
         <AddTodo addTodo={this.handleTodo}/>

        </div>
      </div>
    );
  }
});

module.exports= TodoApp;
