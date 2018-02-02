var React = require('react');

var AddTodo= React.createClass({
  onAddtodoFormSubmit:function(e){
    e.preventDefault();
    var todoText = this.refs.addTodo.value;
    if(todoText.length>0){
      this.refs.addTodo.value='';
      this.props.addTodo(todoText);
    }
    else{
      this.refs.addTodo.focus();
    }
  },

  render:function(){
    return(
      <div className="container__footer">
        <form onSubmit={this.onAddtodoFormSubmit}>
          <input type="text" ref="addTodo" placeholder="What do you need to do?"></input>
          <button className="button expanded">Add Todo</button>
        </form>

      </div>
    );
  }
});
module.exports= AddTodo;
