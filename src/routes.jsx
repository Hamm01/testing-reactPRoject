import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import Navbar from './Navbar'
import Team from './pages/Team'
import About from './pages/About'

// this is the object way for declaring the routes
export const Router = createBrowserRouter([
  {
    element: <NavOutlet />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/store', element: <Store /> },
      { path: '/about', element: <About /> },
      { path: '/team', element: <Team /> }
    ]
  }
])

function NavOutlet() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
