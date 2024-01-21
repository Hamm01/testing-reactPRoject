import { useLoaderData } from 'react-router-dom'
import { getTodos } from '../api/todos'

function TodoList() {
  const Todos = useLoaderData()
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {Todos.map(todo => {
          return (
            <li
              className={todo.completed ? 'strike-through' : undefined}
              key={todo.id}
            >
              {todo.title}
            </li>
          )
        })}
        <li>delectus aut autem</li>
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
