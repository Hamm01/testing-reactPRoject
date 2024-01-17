import { useEffect, useReducer, useState } from "react"
import "./styles.css"
import { TodoItem } from "./TodoItem"
import NewTodoForm from './NewTodoForm'
// Instructions

// 1. The state for our todos should be stored in local storage so when we come back to the page at a later time all our data is still there
// 2. Convert all the state in the application to use `useReducer` and `Context` to pass the state between components
// 3. Add the ability to delete existing todos
// 4. Add a form that lets you filter todos by their name and hide completed todos

const LOCAL_STORAGE_KEY = "TODOS_KEY"
const ACTIONS ={
ADD : "ADD",
UPDATE: "UPDATE",
TOGGLE: "TOGGLE",
DELETE: "DELETE"
}
function reducer(todos, {type, payload}){

  switch(type){
    case ACTIONS.ADD :
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ]
    case ACTIONS.TOGGLE : 
      return todos.map((todo) =>{
      if(todo.id === payload.id){
        return {...todo, completed: payload.completed}
      }
      return todo
      })
    case ACTIONS.DELETE : 
      return todos.filter(todo => todo.id != payload.id)
    default :
     throw new Error(`No action found for ${type}.`)
  }
}

function App() {
 
  const [todos, dispatch] = useReducer(reducer,[],initialValue => {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY)
  if(value === null) return initialValue
  return JSON.parse(value)
  })
 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function addNewTodo(name) {
    if (name === "") return

    dispatch({type: ACTIONS.ADD, payload: {name}})
  }

  function toggleTodo(todoId, completed) {

    dispatch({type: ACTIONS.TOGGLE, payload:{id: todoId,completed }})
  
  }

  function deleteTodo(todoId) {
    dispatch({type:ACTIONS.DELETE , payload: { id: todoId}})
    
  }

  return (
    <>
      <ul id="list">
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>

      <NewTodoForm addNewTodo={addNewTodo} />
    </>
  )
}

export default App
