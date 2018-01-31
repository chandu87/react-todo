var expect= require('expect');
var React= require('react');
var ReactDOM=require('react-dom');
var TestUtils= require('react-addons-test-utils');
var $= require('jQuery');


var Todo = require('Todo');

describe('Todo',()=>{
  it('should exist',()=>{
    expect(Todo).toExist();
  });
  it('should call handleToggle function with id when you click checked',()=>{
    var todos= {id: 11, text: "test data", completed:true};
    var spy = expect.createSpy();
    var todo= TestUtils.renderIntoDocument(<Todo {...todos} handleToggle={spy}/>);
    var $el= $(React.findDOMNode(todo));

expect(todo.props.id).toBe(11);
TestUtils.Simulate.click($el[0]);
expect(spy).toHaveBeenCalledWith(11);

  });
});
