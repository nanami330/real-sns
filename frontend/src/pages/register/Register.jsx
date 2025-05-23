import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワードが違います。");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-[#e5eefa] flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        {/* 左カラム */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-[50px] font-extrabold text-[#41428b]">Real SNS</h3>
          <span className="text-[24px] text-black">本格的なSNSを、自分の手で。</span>
        </div>

        {/* 右カラム */}
        <div className="flex-1 flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="h-[400px] p-5 bg-white rounded-[10px] flex flex-col justify-between shadow-[2px_6px_8px_-5px_#5977a6]"
          >
            <p className="text-center font-semibold">新規登録はこちら</p>
            <input
              type="text"
              placeholder="ユーザー名"
              required
              ref={username}
              className="h-[50px] rounded-[10px] border border-gray-400 text-[18px] pl-5 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Eメール"
              required
              ref={email}
              className="h-[50px] rounded-[10px] border border-gray-400 text-[18px] pl-5 focus:outline-none"
            />
            <input
              type="password"
              placeholder="パスワード"
              required
              minLength={6}
              ref={password}
              className="h-[50px] rounded-[10px] border border-gray-400 text-[18px] pl-5 focus:outline-none"
            />
            <input
              type="password"
              placeholder="確認用パスワード"
              required
              minLength={6}
              ref={passwordConfirmation}
              className="h-[50px] rounded-[10px] border border-gray-400 text-[18px] pl-5 focus:outline-none"
            />
            <button
              type="submit"
              className="h-[50px] rounded-[10px] border-none bg-[#41428b] text-white text-[20px] font-medium cursor-pointer mt-1"
            >
              サインアップ
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="h-[50px] w-[60%] self-center rounded-[10px] border-none bg-[#3c8b50] text-white text-[20px] font-medium cursor-pointer mt-4"
            >
              ログイン
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
