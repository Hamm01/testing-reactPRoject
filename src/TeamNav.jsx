import { Link } from 'react-router-dom'

export default function TeamNav() {
  return (
    <ul>
      <li>
        <Link to="/team/himanish">Teams - himanish</Link>
      </li>
      <li>
        <Link to="/team/maruti">Teams - Maruti</Link>
      </li>
    </ul>
  )
}
