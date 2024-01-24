import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation
} from 'react-router-dom'
import { FormGroup } from '../component/FormGroup'
import { getUsers } from '../api/users'
import { createPost } from '../api/posts'
import { PostForm } from '../component/PostForm'

export function NewPost() {
  const users = useLoaderData()
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'
  const errors = useActionData()

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} isSubmitting={isSubmitting} errors={errors} />
    </>
  )
}
async function action({ request }) {
  const formData = await request.formData()
  const title = formData.get('title')
  const body = formData.get('body')
  const userId = formData.get('userId')
  const errors = postFormValidator({ title, body, userId })
  if (Object.keys(errors).length > 0) {
    return errors
  }
  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  )

  return redirect(`/posts/${post.id}`)
}

function loader({ request: { signal } }) {
  return getUsers({ signal })
}

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />
}

export function postFormValidator({ title, body, userId }) {
  const errors = {}
  if (title === '') {
    errors.title = 'Required'
  }
  if (body === '') {
    errors.body = 'Required'
  }
  if (userId === '') {
    errors.userId = 'Required'
  }
  return errors
}
