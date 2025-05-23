import React, { useContext, useRef, useState } from 'react'
import "./Share.css";
import { Analytics, Face, Gif, Image } from '@mui/icons-material';
import { AuthContext } from '../../state/AuthContext';
import axios from 'axios';


export default function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext);
  const desc = useRef();

  const [file, setFile] =useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if(file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
       console.log(newPost);
      try {
        //画像APIをたたく
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/post", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
      
    }
  };

  return (
    <div className='w-full h-170px shadow-xl rounded-lg'>
        <div className="p-10">
            <div className="flex items-center">
            <img   src={
                                user.profilePicture 
                                ? PUBLIC_FOLDER + user.profilePicture 
                                : PUBLIC_FOLDER + "/person/noAvatar.png"} 
                             className="w-10 h-10 rounded-full object-cover mr-10"/>
                <input type="text" 
                       className='border-none w-full outline-none'
                       placeholder='今なにしてるの？'
                       ref ={desc}
                       />
        </div>
        <hr className="m-2" />

        <form className="flex items-center justify-between" onSubmit={(e) => handleSubmit(e)}>
          <div className='flex ml-2'>
            <label className='flex items-center mr-4 cursor-pointer' htmlFor="file">
            <Image className='mr-1' htmlColor='blue'/>
            <span className="text-xs font-medium">写真</span>
            <input 
              type="file" 
              id="file" 
              accept='.png, .jpeg, .jpg' 
              style={{display: "none"}}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          <div className='flex items-center mr-4 cursor-pointer'>
            <Gif className='mr-1' htmlColor='hotpink'/>
            <span className="text-xs font-medium">GIF</span>
          </div>

          <div className='flex items-center mr-4 cursor-pointer'>
            <Face className='mr-1' htmlColor='green'/>
            <span className="text-xs font-medium">気持ち</span>
          </div>

          <div className='flex items-center mr-4 cursor-pointer'>
            <Analytics className='mr-1' htmlColor='red'/>
            <span className="text-xs font-medium">投票</span>
          </div>
        </div>
        <button className="w-20 border-none p-px bg-blue-500 rounded-md text-stone-50 cursor-pointer mr-5" type="submit">投稿</button>
       </form>
       </div>
    </div>
  )
}
