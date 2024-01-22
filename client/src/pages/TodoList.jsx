import { useLoaderData } from 'react-router-dom'
import { getTodos } from '../api/todos'
import TodoItem from '../component/todoItem'

function TodoList() {
  const Todos = useLoaderData()
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {Todos.map(todo => {
          return <TodoItem key={todo.id} {...todo} />
        })}
      </ul>
    </>
  )
}

function loader({ request: { signal } }) {
  return getTodos({ signal })
}

export const todoListRoute = {
  loader,
  element: <TodoList />
}
