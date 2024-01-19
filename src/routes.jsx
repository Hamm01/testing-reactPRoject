import {
  Route,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'

//  Creating the Routes using the browser router
// using the jsx way to write down the routes
export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </>
  )
)

// this is the object way for declaring the routes
export const Router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/store', element: <Store /> },
  { path: '/about', element: <About /> }
])

// below is the same way the routes are written but used hashed router the routes will work as
//http://localhost:5173/#/
// http://localhost:5173/#/about
// http://localhost:5173/#/store
export const HashRouter = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </>
  )
)
