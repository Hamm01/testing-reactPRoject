import { Navigate, createBrowserRouter, useRouteError } from 'react-router-dom'
import { postListRoute } from './pages/PostList'
import { userListRoute } from './pages/UserList'
import { todoListRoute } from './pages/TodoList'
import { postRoute } from './pages/post'
import { userRoute } from './pages/User'
import { RootLayout } from './layouts/RootLayout'

// ErrorPage function added for generic error message when in production and
// to see the error message in detail when in development with error stack
export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
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

function ErrorPage() {
  const error = useRouteError()

  return (
    <>
      <h1>Error - Something went Wrong</h1>
      {import.meta.env.MODE !== 'production' && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  )
}
