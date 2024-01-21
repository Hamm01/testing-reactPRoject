import { Navigate, createBrowserRouter } from 'react-router-dom'
import { postListRoute } from './pages/PostList'
import { userListRoute } from './pages/UserList'
import { TodoList } from './pages/TodoList'
import { RootLayout } from './layouts/RootLayout'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: 'posts',
        children: [
          {
            index: true,
            ...postListRoute
          },
          { path: ':postId', element: <h1>Single post</h1> }
        ]
      },
      { path: 'users', ...userListRoute },
      { path: 'todos', element: <TodoList /> }
    ]
  }
])
