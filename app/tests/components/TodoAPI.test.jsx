
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


});
