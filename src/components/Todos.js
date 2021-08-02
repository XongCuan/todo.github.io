
import React, {Fragment, useState, useEffect} from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

<script src="http://localhost:3000"></script>

const Todos = () => {
    /* trả về 1 array */
    const [todosState, setTodosState] = useState ([])

    useEffect(()=>{
        const getTodos= async () => {
            try {
                const res = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos?_limit=10'
                )
                // console.log(res.data)
                setTodosState(res.data)
            }catch (error){
                console.log(error.message)
            }
        }
        getTodos()
    },[])


      const markCompleted = id => {
        const newTodos = todosState.map(todo => {
            if(todo.id === id) todo.completed = !todo.completed
            return todo
        })

        setTodosState(newTodos)
      }


      const deleteTodo = async id => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const newTodos = todosState.filter(todo => todo.id !== id)
          setTodosState(newTodos)
        } catch (error) {
            console.log(error.message)
        }
          
      }
    


      const addTodo = async title => {
       try {
           const res = await axios.post(
               'http://jsonplaceholder.typicode.com/todos',{
                   title,
                   completed :false,
               }
                )
            const newTodos = [...todosState, res.data]
            setTodosState(newTodos)
       } catch (error) {
            console.log(error.message)
       }
      }


    return (
        <Fragment> 
            < AddTodo  addTodoFunc ={addTodo}/>
            {todosState.map(todo => {
               return (
               <TodoItem 
               key={todo.id} 
               todoProps={todo} 
               markCompletedFunc={markCompleted}
               deleteTodoFunc={deleteTodo}
                />
               )
            })}
        </Fragment>
    
    )
}
    


export default Todos

 /* const allTodos = []

    for (let todo of todosState)
    {
        allTodos.push(<p>{todo}</p>)
    } */