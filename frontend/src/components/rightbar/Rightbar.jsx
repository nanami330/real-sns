import React from 'react';
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({ user }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="flex items-center">
          <img src="assets/star.png" alt="" className="w-10 h-10 mr-1.5" />
          <span className="font-light text-sm">
            <b>フォロワー限定</b>イベント開催中
          </span>
        </div>
        <img src="assets/ad.jpeg" alt="" className="w-full rounded-xl my-6" />

        <h4 className="text-lg font-semibold mb-5">オンラインの友達</h4>
        <ul className="p-0 m-0 list-none">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>

        <p className="text-lg font-semibold mb-[-10px]">プロモーション広告</p>

        <img
          src="assets/promotion/promotion1.jpeg"
          alt=""
          className="w-[85%] rounded-xl my-6"
        />
        <p className="text-sm text-gray-700 mt-[-20px]">ショッピング</p>

        <img
          src="assets/promotion/promotion2.jpeg"
          alt=""
          className="w-[85%] rounded-xl my-6"
        />
        <p className="text-sm text-gray-700 mt-[-20px]">カーショップ</p>

        <img
          src="assets/promotion/promotion3.jpeg"
          alt=""
          className="w-[85%] rounded-xl my-6"
        />
        <p className="text-sm text-gray-700 mt-[-20px]">ShinCode株式会社</p>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="text-lg font-semibold mb-2.5">ユーザー情報</h4>
        <div className="mb-7.5">
          <div className="mb-2.5">
            <span className="font-medium mr-1 text-gray-700">出身 :</span>
            <span className="font-medium text-gray-700">福岡</span>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-2.5">あなたの友達</h4>
        <div className="flex flex-wrap justify-between">
          {[1, 2, 3, 4, 5].map((id) => (
            <div key={id} className="flex flex-col mb-5 cursor-pointer">
              <img
                src={`${PUBLIC_FOLDER}/person/${id}.jpeg`}
                alt=""
                className="w-[80px] h-[80px] rounded-md object-cover"
              />
              <span className="text-center mt-1">
                {id === 1 && "Shin Code"}
                {id === 2 && "Yamaki"}
                {id === 3 && "Koga"}
                {id === 4 && "Matukubo"}
                {id === 5 && "Kikuawa"}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex-[3] p-3">
      <div className="pr-5 pt-5 pb-0">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
