var expect= require('expect');
var React= require('react');
var ReactDOM=require('react-dom');
var TestUtils= require('react-addons-test-utils');
var $= require('jQuery');


var TodoApp = require('Todo');

describe('TodoApp',()=>{
  it('should exist',()=>{
    expect(TodoApp).toExist();
  });
});
