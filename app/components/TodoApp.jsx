var React= require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState:function(){
    return{
      showCompleted:false,
      searchText:'',
      todolist : [
          {id : 1,text:'washing clothes'},
          {id: 2,text:'dinner with friend'}
      ]
    };

  },
handleTodo :function(text){
  alert('handletodo:'+text);
},
handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLoweraCase()
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
