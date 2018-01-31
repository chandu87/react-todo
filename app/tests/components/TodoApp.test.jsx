var expect= require('expect');
var React= require('react');
var ReactDOM=require('react-dom');
var TestUtils= require('react-addons-test-utils');
var $= require('jQuery');


var TodoApp = require('TodoApp');

describe('TodoApp',()=>{
  it('should exist',()=>{
    expect(TodoApp).toExist();
  });
  it('should add new todo to list',()=>{
    var todoText = 'test case';
    var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoapp.setState({todolist:[]});
    todoapp.handleTodo(todoText);

    expect(todoapp.state.todolist[0].text).toBe(todoText);
  });
  it('should toggle when handle toggle called',()=>{
    var todos = {id:111,text:"test data",completed:false};
    var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoapp.setState({
      todolist: [todos]
    });
    expect(todoapp.state.todolist[0].completed).toBe(false);
    todoapp.handleToggle(111);
      expect(todoapp.state.todolist[0].completed).toBe(true);

  });
});
