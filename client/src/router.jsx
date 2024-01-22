import { Navigate, createBrowserRouter } from 'react-router-dom'
import { postListRoute } from './pages/PostList'
import { userListRoute } from './pages/UserList'
import { todoListRoute } from './pages/TodoList'
import { postRoute } from './pages/post'
import { userRoute } from './pages/User'
import { RootLayout } from './layouts/RootLayout'

// 1. path :"*" route added, this will provide any other route error of 404
// 2 . errorElement added specificly in children of rootLayout because any axios error or
// error in component will lead to show message Error.. the root layout , nav bar will be loaded and our error will be
// displayed below
export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        errorElement: <h1>Error</h1>,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: 'posts',
            children: [
              {
                index: true,
                ...postListRoute
              },
              { path: ':postId', ...postRoute }
            ]
          },
          {
            path: 'users',
            children: [
              { index: true, ...userListRoute },
              { path: ':userId', ...userRoute }
            ]
          },
          { path: 'todos', ...todoListRoute },
          { path: '*', element: <h1>Error -404 Page Not found</h1> }
        ]
      }
    ]
  }
])
