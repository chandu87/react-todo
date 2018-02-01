var React= require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState:function(){
    return{
      showCompleted:false,
      searchText:'',
      todolist : TodoAPI.getTodos()
    };

  },
  componentDidUpdate:function(){
    TodoAPI.setTodos(this.state.todolist);

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
