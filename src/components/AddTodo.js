import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodo = props => {
  const addTodo = props.addTodoFunc

  const [title, setTitle ]= useState('')

  const addTodoFormStyle = {
    display : 'flex',
  }

  const addTodoInputStyle = {
    flex :'10',
    padding : '5px',
  }

 const changeTitle = event => {
  setTitle(event.target.value)
 }

 const addSingleTodo = event => {
   event.preventDefault(); // tránh việc load lại trang
   if (title !== ''){
     addTodo(title)
     setTitle('')
   }
 }

  return (
    <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
      <input type="text" name="title" placeholder = "Thêm Việc " 
      style={addTodoInputStyle} value={title}  onChange={changeTitle}/>

      <input type="submit" value="Thêm" className="btn" />
    </form>
  )
}

//PropTypes
AddTodo.propTypes = {
  addTodoFunction: PropTypes.func.isRequired,
}

export default AddTodo