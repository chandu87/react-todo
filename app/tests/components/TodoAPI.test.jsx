
var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should exist',()=>{
    expect(TodoAPI).toExist();
  });
  describe('test setTodos',()=>{
      it('when valid data passed ',()=>{
        var testData = [{id:1,text:'sdfdsf',completed:true}];
        TodoAPI.setTodos(testData);
        var passedData=JSON.parse(localStorage.getItem('todos'));
        expect(passedData).toEqual(testData);
      });
      it('when Invalid data passed ',()=>{
        var testData = {id:1,text:'sdfdsf',completed:true};
        TodoAPI.setTodos(testData);
        var passedData=JSON.parse(localStorage.getItem('todos'));
        expect(passedData).toEqual(null);
      });

  });
  describe('test getTodos',()=>{
    it('gettods when invalid data passed',()=>{
      var actualTodos= TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('gettodos when valid todos passed',()=>{
      var todos= [{id:32,text:"adsa",completed:true}];
      localStorage.setItem('todos',JSON.stringify(todos));
      expect(TodoAPI.getTodos()).toEqual(todos);
    });
  });

  describe('filter todos',()=>{
    var todos= [
      { id:1,
        text:"asas",
        completed:true
      },
        { id:2,
          text:"asdvs",
          completed:false
        }
      ];
    it('should return all items if showCompleted is true',()=>{
      var showCompleted = true;
      var filteredtodos = TodoAPI.filterTodos(todos,showCompleted,"");
      expect(filteredtodos.length).toBe(todos.length);
    });
    it('if showCompleted is false',()=>{
      var showCompleted=false;
      var filteredtodos = TodoAPI.filterTodos(todos,showCompleted,"");
      expect(filteredtodos.length).toBe(1);
    });
    it('should sort by completed status',()=>{
      var showCompleted = true;
      var filteredtodos = TodoAPI.filterTodos(todos,showCompleted,"");
      expect(filteredtodos[0].completed).toBe(false);
    });
    it('should return all todos if serachtext is empty',()=>{
      var showCompleted = true;
      var filteredtodos = TodoAPI.filterTodos(todos,showCompleted,"");
      expect(filteredtodos.length).toBe(todos.length);
    });
    it('should return only the todos contain serachtext',()=>{
      var showCompleted = true;
      var filteredtodos = TodoAPI.filterTodos(todos,showCompleted,"asd");
      expect(filteredtodos.length).toBe(1);
    });
  });


});
