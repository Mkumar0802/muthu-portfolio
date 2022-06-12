import React, { useState } from 'react'
import {Link,  Outlet } from "react-router-dom";

const Navbar = () => {

  let [open, setOpen] = useState(false);
  return (
    <div className=' shadow-md w-full  top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-cyan-400 md:px-10 px-7     '>
        <div className='font-bold text-2xl cursor-pointer    items-center font-[Poppins] '>
          <div className='flex flex-col animate-fadeInLeft'>
            <span className='text-xl  md:text-3xl mr-1 pt-2 text-white'>
              mkumar0802@gmail.com
            </span >
            <span className='text-xl  md:text-3xl mr-1 pt-2 text-white'>
              9566420177
            </span >
          </div>


        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={` text-white md:flex gap-3 md:items-center md:pb-0 pb-12 absolute md:static animate-fadeInRight  pl-9   md:z-auto z-[-1] left-0 w-3/4 md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? '  top-20 ' : 'top-[-490px]  '}`}>

          <li className="  rounded-lg px-4 py-2  bg-teal-600 hover:bg-teal-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <Link to="/">Home </Link>

          </li>

          <li className=" rounded-lg px-4 py-2  bg-teal-600 hover:bg-teal-700 flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <Link to="/about">About</Link>
          </li>

          <li className=" rounded-lg px-4 py-2  bg-teal-600 hover:bg-teal-700 flex  text-justify  hover:ring-4 ring-white transition ease-in-out duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <Link to="/skill">Skill</Link>
          </li>
         
          <li className=" rounded-lg px-4 py-2  bg-teal-600 hover:bg-teal-700 flex text-justify hover:ring-4 ring-white transition ease-in-out duration-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <Link to="/project">Project</Link>
          </li>
          <li className=" rounded-lg px-4 py-2  bg-teal-600 hover:bg-teal-700 flex text-justify hover:ring-4 ring-white transition ease-in-out duration-100 ">
            <div>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
          
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar