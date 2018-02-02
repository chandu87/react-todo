var React= require('react');
var moment= require('moment');

var Todo = React.createClass({
  render:function(){
    var {id,text,completed,createdAt,completedAt}= this.props;
    var renderDate= ()=>{
      var currenttimestamp;
      var message;
      if(completed){
        currenttimestamp= completedAt;
        message = 'Completed :'
      }else{
        currenttimestamp=createdAt;
        message = 'Created :'
      }

      return message + moment.unix(currenttimestamp).format('MMMM Do, YYYY @ hh:mm A');
  };

    return(
      <div onClick={()=>{
        this.props.handleToggle(id);
      }}>
        <input type="checkbox" checked={completed}></input>
         <p>{text}</p>
         <p>{ renderDate() }</p>
      </div>
    );
  }
});

module.exports= Todo;
