import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {

    return (
        <div className=" ">
        <div className="my-28 flex justify-evenly items-center  scroll-mt-20">
            <Heading title="Education" />
            <div className="w-screen h-screen blue-gradient-background gradient-background-animated  lg:pt-10">
                <div className=" flex p-28   md:    lg:h-5/6   justify-center">
                    <div className="flex justify-around items-center">
                        <div class="flex justify-center py-8 md:px-5">
                            <div class="rounded-lg shadow-xl bg-slate-200 max-w-sm hover:bg-slate-400 ">
                                <a href="https://www.guvi.in/" target="_blank" rel="noreferrer">
                                    <img class="rounded-t-lg pl-4 h-20 w-20" src={card1} alt="" />
                                </a>
                                <div class="p-6 ">
                                    <h5 class="text-gray-900 text-2xl font-medium mb-2 "> Guvi Geek Network Private Ltd,Chennai</h5>

                                    <p class="text-gray-700 text-base mb-4">
                                        Mern Stack Development
                                    </p>
                                    <p class="text-gray-700 text-base mb-4">
                                        From June 2021 To Till Now
                                    </p>



                                </div>
                            </div>
                        </div>


                        <div class="flex justify-center py-8 md:px-5">
                            <div class="rounded-lg shadow-xl bg-slate-200 max-w-sm hover:bg-slate-400">
                                <a href="https://www.mookambigai.ac.in/" target="_blank" rel="noreferrer">
                                    <img class="rounded-t-lg pl-2 h-20 w-20" src={Logo} alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-2xl font-medium mb-2 ">Mookambigai College Of Engineering</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        BE Electrial Electronics Engineering
                                    </p>
                                    <p class="text-gray-700 text-base mb-4">
                                        From   June  2014 To  Apr 2017
                                    </p>


                                </div>
                            </div>
                        </div>



                        <div class="flex justify-center py-8 md:px-5">
                            <div class="rounded-lg shadow-xl bg-slate-200 max-w-sm hover:bg-slate-400 ">
                                <a href="http://stmaryshrsecschool.org/" target="_blank" rel="noreferrer">
                                    <img class="rounded-t-lg pl-2 h-20 w-20 pt-2" src={Logo1} alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-2xl font-medium mb-2">St Mary's Boys Higher Secondary School </h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        SSLC    
                                    </p>
                                    <p class="text-gray-700 text-base mb-4">
                                        From   June  2010 To  Apr 2011
                                    </p>


                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}



export default Header;







