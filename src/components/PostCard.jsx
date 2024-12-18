import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard({$id , title , featuredImage}) { 
  // since we are using appwrite , they have syntax of writing id in $id
  
  return (
    // to means href here
    <Link to ={`/post/${$id}`}> 
        <div className='w-full bg-gray-100 rounded-xl p-4'>
          <div className='w-full justify-center mb-4'>
            <img src = {appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
          </div>
          <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard