import { Navigate, createBrowserRouter } from 'react-router-dom'
import { PostList } from './pages/PostList'
import { UserList } from './pages/UserList'
import { TodoList } from './pages/TodoList'
import { RootLayout } from './layouts/RootLayout'
import axios from 'axios'
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
            element: <PostList />,
            loader: ({ request: { signal } }) => {
              return axios
                .get('http://localhost:3000/posts', { signal })
                .then(res => res.json())
            }
          },
          { path: ':postId', element: <h1>Single post</h1> }
        ]
      },
      { path: 'users', element: <UserList /> },
      { path: 'todos', element: <TodoList /> }
    ]
  }
])
