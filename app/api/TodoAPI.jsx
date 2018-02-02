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

    //filter by showCompleted checkbox
    filteredtodos = filteredtodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });



    //sort todos with not completed first
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

    //filter by search text
    if(searchText.length===0){
      return filteredtodos;
    }else{
      return filteredtodos.filter((todo)=>{
          var text = todo.text.toLowerCase();
          return text.indexOf(searchText) > -1;
        });
    }


    return filteredtodos;

  }
};
