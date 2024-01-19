import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/store">Store</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/team">Teams</Link>
      </li>
      <li>
        <Link to="/team/himanish">Teams - himanish</Link>
      </li>
      <li>
        <Link to="/team/maruti">Teams - Maruti</Link>
      </li>
    </ul>
  )
}
