import React from 'react'
import { createPost } from '../actions/action'
const page = () => {
  return (  
    <div className='text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-5 '>Create Post</h1>
        <form action={createPost}>
        <input type="text" className='px-3 border rounded h-full p-2' placeholder='Type title for your Post' />
        <button  className='bg-blue-500 text-white px-5 p-2 rounded-sm'>Submit</button>
        </form>
     
    </div>
  )
}

export default page
