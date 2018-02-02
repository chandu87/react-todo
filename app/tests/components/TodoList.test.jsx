var expect= require('expect');
var React= require('react');
var ReactDOM=require('react-dom');
var TestUtils= require('react-addons-test-utils');
var $= require('jQuery');


var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList',()=>{
  it('should exist',()=>{
    expect(TodoList).toExist();
  });

  it('number of rendered components is equal to length of array',()=>{
    var todos= [{id:1,text:"java"},{id:2,text:"react"}];
    var todoList= TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents= TestUtils.scryRenderedComponentsWithType(todoList,Todo);

    expect(todoComponents.length).toBe(todos.length);

  });
  it('should render message when todolist is empty',()=>{
    var todos= [];
    var todoList= TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(React.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);

  })
});
