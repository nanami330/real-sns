import React from 'react'

export default function CloseFriend({user}) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className='flex items-center mb-2 px-2'>
                    <img src={PUBLIC_FOLDER +user.profilePicture} alt='' className='w-20 h-20 rounded-full object-cover relative'/>
                <span className="ml-2 test-sm font-medium">{user.username}</span>
                </li>
  )
}
