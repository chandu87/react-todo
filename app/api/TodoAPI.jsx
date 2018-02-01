var $ = require('jQuery');
module.exports = {
  setTodos:function(todos){
    if($.isArray(todos))
    {
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }
  },
  getTodos:function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    }
    catch(e){

    }
    return $.isArray(todos) ? todos : [];
  },
  //function for filtering todo list
  filterTodos:function(todos,showCompleted,searchText){
    var filteredtodos = todos;

    filteredtodos = filteredtodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    filteredtodos.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1;
      }
      else if(a.completed && !b.completed){
        return 1;
      }
      else{
        return 0;
      }

    });

    return filteredtodos

  }
};
