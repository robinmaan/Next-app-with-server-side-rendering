"use client"
import React from 'react'
import { useState  } from 'react'
function UpvoteButton() {
    const [upvotecount,setUpvotecount] = useState(0)
    console.log(upvotecount)
  return (
    <div>
      <button onClick={()=>{setUpvotecount(upvotecount + 1)}} className='bg-blue-500 text-white  rounded-sm  p-2 mt-10'>{upvotecount}Upvote</button>
    </div>
  )
}

export default UpvoteButton
