import React, { useContext, useEffect, useState } from 'react'
import "./TimeLine.css";
import Share from '../share/Share';
import Post from '../post/Post';
// import {Posts} from "../../dummyData";
import axios from "axios";
import { AuthContext } from '../../state/AuthContext';

export default function TimeLine({username}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username 
        ? await axios.get(`/post/profile/${username}`)  //プロフィールの場合
        : await axios.get(`/post/timeline/${user._id}`); //ホームの場合
    // console.log(response);
    setPosts(response.data.sort((post1, post2) => {
      return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    }
    fetchPosts();
  }, [username]);

  return (
    <div className='flex-6'>
      <div className="p-20px">
        <Share />
         {posts.map((post) => (
        <Post post ={post} key={post._id} />
          ))} 
      </div>
    </div>
  )
}
