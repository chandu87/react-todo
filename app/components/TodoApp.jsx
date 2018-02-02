var React= require('react');
var uuid = require('node-uuid');
var moment = require('moment');

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
        todo.completedAt=todo.completed ? moment().unix() : undefined ;
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
      ,{id:uuid(),text:text,completed:false,createdAt:moment().unix(),completedAt:undefined}]
  });
},
handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
},
  render:function(){
    var {todolist,showCompleted,searchText}= this.state;
    var filteredtodos= TodoAPI.filterTodos(todolist,showCompleted,searchText);

    return(
      <div>
          <h1 className="page-title">TODO APP</h1>
          <div className="row">
            <div className="columns medium-6 large-4 small-centered">
              <div className="container">
             <TodoSearch onSearch = {this.handleSearch}/>
             <TodoList todos={filteredtodos} handleToggle={this.handleToggle}/>
             <AddTodo addTodo={this.handleTodo}/>
             </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports= TodoApp;
