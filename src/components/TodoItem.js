

import React from 'react';
import PropTypes from 'prop-types'


<script src="http://localhost:3000"></script>
const TodoItem = (props) => {
  const todo = props.todoProps;
  const markCompleted = props.markCompletedFunc ;
  const deleteTodo = props.deleteTodoFunc ;


/* Style */
    const todoItemStyle = {
        background :'#f4f4f4',
        padding :'10px',
        borderBottom: '1px #ccc dotted', 
        textDecoration : todo.completed ? 'line-through' : 'none'
    }

    const deteleButtonStyle = {
      background : '#ff0000',
      color :'#fff',
      boder :'none',
      padding :'5px 9px',
      borderRadius :'50%',
      cursor :'pointer',
      float :'right'
    }

/* Return */ 
  return  (
     <p style={todoItemStyle} >
      <input 
          type="checkbox"
          onChange={markCompleted.bind(this, todo.id)}
          checked={todo.completed}
        />
      {todo.title}
      <button style={deteleButtonStyle}  onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
    </p>
  )
}

/* ProTypes */
TodoItem.propTypes = {
  todoProps :PropTypes.object.isRequired,
  markCompletedFunc : PropTypes.func.isRequired,
  deleteTodoFunc :    PropTypes.func.isRequired
  
}

export default TodoItem