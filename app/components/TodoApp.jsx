var React= require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState:function(){
    return{
      showCompleted:false,
      searchText:'',
      todolist : [
          {id : uuid(),text:'washing clothes'},
          {id: uuid(),text:'dinner with friend'}
      ]
    };

  },
handleTodo :function(text){
  this.setState({
    todolist:[...this.state.todolist
      ,{id:uuid(),text:text}]
  });
},
handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
},
  render:function(){
    var {todolist}= this.state;

    return(
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">

         <h1>TODO APP</h1>
         <TodoSearch onSearch = {this.handleSearch}/>
         <TodoList todos={todolist}/>
         <AddTodo addTodo={this.handleTodo}/>

        </div>
      </div>
    );
  }
});

module.exports= TodoApp;
