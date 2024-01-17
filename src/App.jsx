import { createContext, useEffect, useReducer, useState } from "react"
import "./styles.css"
import NewTodoForm from './NewTodoForm'
import { TodoList } from "./TodoList"
import { TodoFilterForm } from "./TodoFilterForm"
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
export const TodoContext = createContext()

function App() {
  const [filterName, setFilterName] = useState("")
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false)
  const [todos, dispatch] = useReducer(reducer,[],initialValue => {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY)
  if(value === null) return initialValue
  return JSON.parse(value)
  })
 
   const filteredTodos = todos.filter((todo) =>{
    if(hideCompletedFilter && todo.completed) {
     return false
    }
   return todo.name.includes(filterName)
  }
   )

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
    <TodoContext.Provider value={
      {todos : filteredTodos,
      addNewTodo,
      toggleTodo,
      deleteTodo,}
    }>
      <TodoFilterForm 
      name={filterName} 
      setName={setFilterName}
      hideCompleted={hideCompletedFilter}
      setHideCompleted={setHideCompletedFilter}
        />
      <TodoList />

      <NewTodoForm />
    </TodoContext.Provider>
  )
}

export default App
