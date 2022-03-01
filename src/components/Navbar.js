import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
 
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-cyan-500   py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-black'>
        <span className='text-3xl mr-1 pt-2'>
        
        </span>
         PORTFOLIO
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={` text-white md:flex gap-3 md:items-center md:pb-0 pb-12 absolute md:static bg-cyan-500  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ?  '  top-20 ':'top-[-490px]  '}`}>
        
      <li className="  rounded-lg px-4 py-2  bg-teal-600 hover:bg-teal-700   flex  text-justify">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
                <Link to="/">Home </Link>
                
            </li>
            <li className=" rounded-lg px-4 py-2  bg-teal-600 hover:bg-teal-700">
                <Link to="/about">About</Link>
            </li>
            <li className=" rounded-lg px-4 py-2  bg-teal-600 hover:bg-teal-700">
                <Link to="/skill">Skill</Link>
            </li>

            <li className=" rounded-lg px-4 py-2  bg-teal-600 hover:bg-teal-700 ">
                <Link to="/contact">Contact</Link>
            </li>
      </ul>
      <Outlet/>
      </div>
    </div>
  )
}

export default Navbar