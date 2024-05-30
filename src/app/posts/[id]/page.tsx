"use client"
import UpvoteButton from '@/components/upvote-Button';
import React, { Suspense, useState } from 'react'

export default async function Page({params}:{params:{id:string}}){  
    
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    
    const post = await response.json();

    
  return (
    <div className='px-7 text-center'>
        <h2 className='mx-auto text-center font-bold text-2xl md:text-4xl pt-20 '>
            {post.title}</h2>
        <p className='max-w-[700px] mt-10 text-xl leading-9 mx-auto text-center'>{post.body}
             </p>
        <UpvoteButton />
    </div>
  )
}


