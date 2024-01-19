import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import Navbar from './Navbar'
import Team from './pages/Team'
import About from './pages/About'
import TeamMember from './pages/TeamMember'
import TeamNav from './TeamNav'

// this is the object way for declaring the routes
//How to do nesting in routes, navoutlet function created, all the children will go through Outlet in react router
// we did this so that navbar in our case will be same for all pages,, we dont have duplicate code in each component file
export const Router = createBrowserRouter([
  {
    element: <NavOutlet />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/store', element: <Store /> },
      { path: '/about', element: <About /> },
      {
        path: '/team',
        element: <TeamNavOutlet />,
        children: [
          { index: true, element: <Team /> },
          { path: 'himanish', element: <TeamMember name="himanish" /> },
          { path: 'maruti', element: <TeamMember name="Maruti" /> }
        ]
      }
    ]
  }
])

// so our localhost:5173 will go thorugh top to bottom apporach .
// as at "/" it will go thorguh NavOutlet.
// but when the team '/team ' is used its parent and its children are himanish and maruti
// all the route /team when clicked in browser first go throuh Navoutlet then team route. in which 1st children has index true that
// used by parent route /team

// The TeamNavlayout is created when the /team is clicked in browser it will use that teamnav bar, only when the '/team' is clicked
// when the /home , /store, / about , these routes will clicked or team nav bar will not be displayed
function NavOutlet() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

function TeamNavOutlet() {
  return (
    <>
      <TeamNav />
      <Outlet context="Hi this is himanish this side" />
    </>
  )
}
