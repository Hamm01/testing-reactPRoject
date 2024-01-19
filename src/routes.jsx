import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'

//  Creating the Routes using the browser router and the object is used to declare the route components

export const Router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/store', element: <Store /> },
  { path: '/about', element: <About /> }
])
