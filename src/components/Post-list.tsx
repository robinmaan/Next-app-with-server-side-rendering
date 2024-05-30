import React from 'react'
import Link from 'next/link'
const PostList = async() => {
    await new Promise((resolve,reject)=> setTimeout(resolve,1000))
  const response = await fetch("https://dummyjson.com/posts?limit=10")
  const data = await response.json()
  return (
    <div>
      <ul>
        {data.posts.map((post:{id:string; title:string})=>(
            <li key={post.id} className='mb-3 '>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
