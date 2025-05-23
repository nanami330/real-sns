import { Chat, Notifications, Search } from '@mui/icons-material';
import React, { useContext } from 'react'
import "./Topbar.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';

export default function Topbar() {
    const {user} = useContext(AuthContext);
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="bg-slate-600 flex height-50px width-full items-center sticky top-0 z-[100%]">
        <div className="flex-[3]">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className='text-xl text-white font-bold ml-20px'>Real SNS</span>
            </Link>
        </div>
        <div className="flex-[5]">
            <div className="w-4px height-3px bg-white rounded-full flex items-center">
                <Search className="text-xs ml-3 mr-2"/>
                <input type="text" 
                       className='border-none w-30'
                       placeholder="探し物は何ですか？"
                  />
            </div>
        </div>
        <div className="flex-[4] flex items-center justify-around text-white">
            <div className="flex">
            <div className="mr-3 cursor-pointer relative mt-3 mb-2">
                <Chat />
                <span className="absolute -top-1 -right-1 bg-purple-500 w-4 h-4 rounded-full flex items-center justify-center text-sm">1</span>
            </div>
            <div className="mr-3 cursor-pointer relative mt-3">
                <Notifications />
                <span className="absolute -top-1 -right-1 bg-purple-500 w-4 h-4 rounded-full flex items-center justify-center text-sm">2</span>
            </div>
            <Link to={`/profile/${user.username}`}>
            <img src={user.profilePicture ? PUBLIC_FOLDER + user.profilePicture :PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className='topbarImg' />
            </Link>
            </div>
        </div>
    </div>
  );
}
