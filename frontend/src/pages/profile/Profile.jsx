import React, { useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TimeLine from '../../components/timeline/TimeLine';
import Rightbar from '../../components/rightbar/Rightbar';
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-[7]">
          {/* Cover + User Image */}
          <div>
            <div className="relative h-[320px]">
              <img
                src={user.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <img
                src={
                  user.profilePicture
                    ? PUBLIC_FOLDER + user.profilePicture
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="w-[150px] h-[150px] rounded-full absolute left-0 right-0 top-[150px] mx-auto"
              />
            </div>

            {/* ユーザー情報 */}
            <div className="flex flex-col items-center justify-center mt-4">
              <h4 className="text-[24px] font-semibold">{user.username}</h4>
              <span className="text-gray-600">{user.desc}</span>
            </div>
          </div>

          {/* タイムライン + 右バー */}
          <div className="flex mt-6">
            <div className="flex-[8]">
              <TimeLine username={username} />
            </div>
            <div className='flex-[4]'>
               <Rightbar user={user} />
              </div>           
          </div>
        </div>
      </div>
    </>
  );
}
