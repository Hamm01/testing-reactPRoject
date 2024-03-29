import { Link, useLoaderData } from 'react-router-dom'
import { getUsers } from '../api/users'

function UserList() {
  const Users = useLoaderData()
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {Users.map(user => (
          <div className="card" key={user.id}>
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <div>{user.company.name}</div>
              <div>{user.website}</div>
              <div>{user.email}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={`/users/${user.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function loader({ request: { signal } }) {
  return getUsers({ signal })
}

export const userListRoute = {
  loader,
  element: <UserList />
}
