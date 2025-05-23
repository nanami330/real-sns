import React from 'react';

export default function Online({ user }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="flex items-center mb-3">
      <div className="relative mr-2">
        <img
          src={PUBLIC_FOLDER + user.profilePicture}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="absolute w-4 h-4 rounded-full bg-purple-600 top-[-0.5rem] left-0 border-2 border-white"></span>
      </div>
      <span className="font-semibold">{user.username}</span>
    </li>
  );
}
