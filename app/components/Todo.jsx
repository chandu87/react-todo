var React= require('react');

var Todo = React.createClass({
  render:function(){
    var {id,text,completed}= this.props;
    return(
      <div onClick={()=>{
        this.props.handleToggle(id);
      }}>
        <input type="checkbox" checked={completed}></input>
         {text}
      </div>
    );
  }
});

module.exports= Todo;
