import { Link, useLoaderData } from 'react-router-dom'
import { getUser } from '../api/users'
function User() {
  const user = useLoaderData()
  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite},{' '}
        {user.address.city}, {user.address.zipcode}
      </div>
    </>
  )
}

function loader({ request: { signal }, params }) {
  return getUser(params.userId, { signal })
}

export const userRoute = {
  loader,
  element: <User />
}
