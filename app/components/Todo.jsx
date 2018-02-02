var React= require('react');
var moment= require('moment');

var Todo = React.createClass({
  render:function(){
    var {id,text,completed,createdAt,completedAt}= this.props;
    var todoStyling = completed ? 'todo todo-completed' :'todo';
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
      <div className={todoStyling} onClick={()=>{
        this.props.handleToggle(id);
      }}>
        <div>
          <input type="checkbox" checked={completed}></input>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{ renderDate() }</p>
        </div>

      </div>
    );
  }
});

module.exports= Todo;
