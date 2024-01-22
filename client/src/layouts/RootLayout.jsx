import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation
} from 'react-router-dom'
// The loading spinner is working when this routeLayout is loading in start, the state is loading otherwise when network request goes during that state until the data is fetched the state will be in loading state otherwise it will be in idle state. so we can use this state by useNavigation hook

export function RootLayout() {
  const { state } = useNavigation()
  const isLoading = state === 'loading'
  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? 'loading' : ''} `}>
        <Outlet />
      </div>
    </>
  )
}
