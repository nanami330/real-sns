import React, { useContext, useEffect, useState } from 'react'
import "./Post.css";
import { MoreVert } from '@mui/icons-material';
import axios from "axios";
import {format} from "timeago.js"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';

export default function Post({post}) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState([]);

    const {user: currentUser} = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
    const response = await axios.get(`/users/?userId=${post.userId}`);
     console.log(response);
    setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

    const handleLike = async() => {
        try {
            await axios.put(`/post/${post._id}/like`,{userId: currentUser._id});
        } catch (err) {
            console.log(err);
        }
        setLike (isLiked ? like -1 : like +1 );
        setIsLiked(!isLiked);
    }

  return (
    <div className=" my-4 shadow-xl rounded-lg overflow-hidden bg-white">
        <div className="p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link to={`/profile/${user.username}`} className="flex items-center">
                         <img 
                            src={
                                user.profilePicture 
                                    ? PUBLIC_FOLDER + user.profilePicture 
                                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                            }
                            alt="" 
                            className="w-12 h-12 rounded-full object-cover border border-gray-300"/>
                    </Link>
                <div className="ml-4">
                    <span className="font-bold text-lg text-gray-800">{user.username}</span>
                    <span className="ml-4 text-sm text-gray-500">{format(post.createdAt)}</span>
                </div>
            </div>
                <div className="postTopRight">
                    <MoreVert className="text-gray-600 cursor-pointer"/>
                </div>
            </div>
                <div className="postCenter mt-4">
                    <span className="postText block text-gray-700 text-base mb-2">{post.desc}</span>
                    {post.img && (<img src={PUBLIC_FOLDER + post.img} alt="" className='postImg w-full rounded-lg object-cover' />)}

                </div>
                <div className="postBottom mt-4 flex items-center justify-between">
                    <div className="postBottomLeft flex items-center">
                        <img src={PUBLIC_FOLDER + "/heart.png"} alt="" className='likeIcon w-6 h-6 cursor-pointer' onClick={() => handleLike()}/>
                        <span className="postLikeCounter ml-2 text-gray-600">{like}人がいいねを押しました</span>
                    </div>

                    <div className="postBottomRight">
                        <span className="postCommentText text-gray-600 cursor-pointer">{post.comment}:コメント</span>
                    </div>
                </div>
            </div>
        </div>
  );
}
