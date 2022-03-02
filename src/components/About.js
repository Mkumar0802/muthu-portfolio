import React from "react";
import card1 from "../assets/guvi.webp";

function About() {
    return (
        <div className="w-screen h-screen blue-gradient-background gradient-background-animated  lg:pt-10">
            <div className="w-full h-4/6 lg:h-5/6 flex flex-col-reverse lg:flex-row justify-center">
                <div className="flex justify-around items-center   flex-col-reverse lg:flex-row ">

                    <div class="max-w-sm grid grid-cols-2 text-white hover:animate-fade-out-down bg-teal-600 rounded-lg border border-gray-400   shadow-2xl ">

                        <img class="rounded-t-lg  " src={card1} alt="" />

                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight ">Guvi Geek Network Private Ltd,Chennai</h5>
                            </a>
                            <p class="mb-3 font-normal ">Mern Stack Development</p>
                            <p class="mb-3 font-normal ">From June 2021 To Till Now</p>
                            
                        </div>
                    </div>


                    <div class="max-w-sm grid grid-cols-2 gap-5 m-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-800">

                        <img class="rounded-t-lg" src={card1} alt="" />

                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Guvi Geek Network Private Ltd,Chennai</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mern Stack Development</p>
                            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div class="max-w-sm grid grid-cols-2 gap-5 m-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-800">

                        <img class="rounded-t-lg" src={card1} alt="" />

                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Guvi Geek Network Private Ltd,Chennai</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mern Stack Development</p>
                            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default About;



  //     <div className="w-screen h-screen blue-gradient-background gradient-background-animated  lg:pt-5">
    //     <div className="w-full h-4/6 lg:h-5/6 flex flex-col-reverse lg:flex-row justify-center">
    //         <div className="flex justify-around items-center lg:w-1/2 w-full lg:h-full">
    //             <div className="mx-auto w-max text-center lg:text-left pl-0 md:pl-2 xl:pl-0">
    //                 <h1 className=" bg-red-700 text-4xl    md:text-5xl lg:text-7xl text-black">MuthuKumar</h1>


    //             </div>
    //         </div>
    //     </div>
    // </div>
