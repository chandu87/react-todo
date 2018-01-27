var expect= require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var AddTodo= require('AddTodo');

describe('AddTodo',()=>{
  it('should exist',()=>{
      expect(AddTodo).toExist();
  });
  it('should call addTodo prop with valid data',()=>{
    var todotext = "check mail";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.addTodo.value = todotext;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith("check mail");
  });
  it('should not call addTodo prop with invalid data',()=>{
    var todotext = "";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.addTodo.value = todotext;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
