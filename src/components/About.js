import React from "react";
import card1 from "../assets/guvi.webp";

function About() {
    return (
        <div className="w-screen h-screen blue-gradient-background gradient-background-animated  lg:pt-10">
            <div className="w-full h-4/6 lg:h-5/6 flex flex-col-reverse lg:flex-row justify-center">
                <div className="flex justify-around items-center   flex-col-reverse lg:flex-row ">

                    <div class="max-w-sm grid grid-cols-2 text-white hover:animate-fade-out-down bg-teal-600 rounded-lg border border-gray-400   shadow-2xl ">

                        <img class="rounded-t-lg  " src={card1} alt="guvi logo" />

                        <div class="p-5">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight ">Guvi Geek Network Private Ltd,Chennai</h5>

                            <p class="mb-3 font-normal ">Mern Stack Development</p>
                            <p class="mb-3 font-normal ">From June 2021 To Till Now</p>

                        </div>
                    </div>


                    <div class="max-w-sm grid grid-cols-2 gap-5 m-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-800">

                        <img class="rounded-t-lg" src={card1} alt="" />

                        <div class="p-5">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Guvi Geek Network Private Ltd,Chennai</h5>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mern Stack Development</p>

                        </div>
                    </div>

                    <div class="max-w-sm grid grid-cols-2 gap-5 m-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-800">

                        <img class="rounded-t-lg" src={card1} alt="" />

                        <div class="p-5">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Guvi Geek Network Private Ltd,Chennai</h5>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mern Stack Development</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default About;


