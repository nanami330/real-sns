import React, { useContext, useRef } from 'react'
import { loginCall } from '../../ActionCalls';
import { AuthContext } from '../../state/AuthContext';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

     console.log(user);

  return (
    <div className="w-screen h-screen bg-[#e5eefa] flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-[50px] font-extrabold text-[#41428b]">Real SNS</h3>
          <span className="text-[24px]">本格的なSNSを、自分の手で。</span>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="h-[400px] p-5 bg-white rounded-[10px] flex flex-col justify-between shadow-[2px_6px_8px_-5px_#5977a6]"
          >
            <p className="text-center font-semibold">ログインはこちら</p>
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
            <button
              type="submit"
              className="h-[50px] rounded-[10px] border-none bg-[#41428b] text-white text-[20px] font-medium cursor-pointer mt-1"
            >
              ログイン
            </button>
            <span className="text-center text-[#41428b]">パスワードを忘れた方へ</span>
            <button
              type="button"
              className="h-[50px] w-[60%] self-center rounded-[10px] border-none bg-[#3c8b50] text-white text-[20px] font-medium cursor-pointer mt-4"
            >
              アカウント作成
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
