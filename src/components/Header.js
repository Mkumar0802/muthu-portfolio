import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {

    return (
        <div className="">
            <div className=" flex shadow-md w-full fixed top-0 left-0 p-5 ">
                <h2 className="  font-bold pl-5 pt-4 justify-center lg:text-4xl "> PORTFOLIO</h2>
            
            <div className="  pl-9  pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div className=" font-bold pt-5 ml-1 ">
                <h3 className="" >+91 9566420177</h3>
                <h3 className="">mkumar0802@gmail.com</h3>
            </div>



            <div className=" grid grid-cols-1 gap-4 sm:hidden md:block lg:block  mx-auto" >
    
        <ul className="flex text-white font-bold space-x-2  md:pt-4  pl-52  ">
            
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
            

        </div>

        
    )
}


export default Header;







