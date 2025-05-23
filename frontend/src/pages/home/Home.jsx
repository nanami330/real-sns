import React from 'react'
import "./Home.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TimeLine from '../../components/timeline/TimeLine';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Home() {
  return (
    <>
        <Topbar />
        <div className="flex w-full bg-slate-50">
         <Sidebar />
          <div className="flex-[8]">
         <TimeLine />
          </div>
          <div className='flex-[4]'>
             <Rightbar />
          </div>
        </div>
    </>
  );
}
