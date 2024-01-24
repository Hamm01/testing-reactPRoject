import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation
} from 'react-router-dom'
import { getUsers } from '../api/users'
import { PostForm } from '../component/PostForm'
import { getPost, updatePost } from '../api/posts'
import { postFormValidator } from './NewPost'

function EditPost() {
  const { users, post } = useLoaderData()
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'
  const errors = useActionData()
  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <PostForm
        users={users}
        isSubmitting={isSubmitting}
        defaultValues={post}
        errors={errors}
      />
    </>
  )
}
async function loader({ request: { signal }, params: { postId } }) {
  const post = getPost(postId, { signal })
  const users = getUsers({ signal })
  return { users: await users, post: await post }
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData()
  const title = formData.get('title')
  const body = formData.get('body')
  const userId = formData.get('userId')
  const errors = postFormValidator({ title, body, userId })
  if (Object.keys(errors).length > 0) {
    return errors
  }
  const post = await updatePost(
    postId,
    { title, body, userId },
    { signal: request.signal }
  )

  return redirect(`/posts/${post.id}`)
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />
}
