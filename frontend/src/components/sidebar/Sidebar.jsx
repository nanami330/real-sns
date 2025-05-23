import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Users } from "../../dummyData";
import CloseFriend from '../closeFriend/CloseFriend';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';

export default function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex-[2] h-screen">
      <div className="p-5">
        <ul className='p-0 m-0 list-none'>
          <li className='flex items-center mb-2 p-1.5 cursor-pointer shadow-[2px_6px_8px_-5px_#5977a6] rounded-xl transition-all duration-300 hover:shadow-none hover:translate-y-1'>
            <Home className="text-[35px] mr-2" />
            <Link to="/" className="no-underline text-black">
              <span className="text-[20px] pt-[3px]">ホーム</span>
            </Link>
          </li>

          <li className='flex items-center mb-2 p-1.5 cursor-pointer shadow-[2px_6px_8px_-5px_#5977a6] rounded-xl transition-all duration-300 hover:shadow-none hover:translate-y-1'>
            <Search className="text-[35px] mr-2" />
            <span className="text-[20px] pt-[3px]">検索</span>
          </li>

          <li className='flex items-center mb-2 p-1.5 cursor-pointer shadow-[2px_6px_8px_-5px_#5977a6] rounded-xl transition-all duration-300 hover:shadow-none hover:translate-y-1'>
            <Notifications className="text-[35px] mr-2" />
            <span className="text-[20px] pt-[3px]">通知</span>
          </li>

          <li className='flex items-center mb-2 p-1.5 cursor-pointer shadow-[2px_6px_8px_-5px_#5977a6] rounded-xl transition-all duration-300 hover:shadow-none hover:translate-y-1'>
            <MessageRounded className="text-[35px] mr-2" />
            <span className="text-[20px] pt-[3px]">メッセージ</span>
          </li>

          <li className='flex items-center mb-2 p-1.5 cursor-pointer shadow-[2px_6px_8px_-5px_#5977a6] rounded-xl transition-all duration-300 hover:shadow-none hover:translate-y-1'>
            <Bookmark className="text-[35px] mr-2" />
            <span className="text-[20px] pt-[3px]">ブックマーク</span>
          </li>

          <li className='flex items-center mb-2 p-1.5 cursor-pointer shadow-[2px_6px_8px_-5px_#5977a6] rounded-xl transition-all duration-300 hover:shadow-none hover:translate-y-1'>
            <Person className="text-[35px] mr-2" />
            <Link to={`/profile/${user.username}`} className="no-underline text-black">
              <span className="text-[20px] pt-[3px]">プロフィール</span>
            </Link>
          </li>

          <li className='flex items-center mb-2 p-1.5 cursor-pointer shadow-[2px_6px_8px_-5px_#5977a6] rounded-xl transition-all duration-300 hover:shadow-none hover:translate-y-1'>
            <Settings className="text-[35px] mr-2" />
            <span className="text-[20px] pt-[3px]">設定</span>
          </li>
        </ul>

        <hr className='my-5' />

        <ul className="p-0 m-0 list-none ml-1">
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
