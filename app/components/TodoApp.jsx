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
          {id : uuid(),text:'washing clothes',completed:true},
          {id: uuid(),text:'dinner with friend',completed:false},
          {id:uuid(),text:'go to movie',completed:true}
      ]
    };

  },
  handleToggle:function(id){
    var updatedTodos = this.state.todolist.map((todo)=>{
      if(todo.id === id){
        todo.completed=! todo.completed;
      }
      return todo;
    });
    this.setState({
      todolist:updatedTodos
    });
  },
handleTodo :function(text){
  this.setState({
    todolist:[...this.state.todolist
      ,{id:uuid(),text:text,completed:false}]
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
         <TodoList todos={todolist} handleToggle={this.handleToggle}/>
         <AddTodo addTodo={this.handleTodo}/>

        </div>
      </div>
    );
  }
});

module.exports= TodoApp;
