import React, { useEffect } from "react";
import card1 from "../assets/guvi.webp";
import Logo1 from "../assets/st.png"
import Logo from "../assets/collegelogo.png"
import Heading from "./Heading";
import working from "../assets/working1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {


    useEffect(() => {
        AOS.init({duration:2000});
    }, [])



    return (
        <div className="my-20 flex justify-evenly items-center flex-col scroll-mt-20 static ">
            <div className="my-6 flex justify-evenly items-center flex-col scroll-mt-20">
                <Heading title="About Me" />
            </div>
            <div data-aos="fade-up"  className=" ">
                <div className="flex justify-around items-center flex-col md:flex-row ">
                    <div className=" w-11/12   md:w-4/12  md:h-5/12    ">
                        <div className="    ">
                            <img src={working} alt="work" />
                        </div>

                    </div>
                    <div className="">
                        <p className="rounded-lg shadow-xl bg-slate-200 max-w-sm hover:bg-slate-400 py-12 px-12  md:text-2xl  text-xl  font-serif">
                            I describe myself as someone persistent, and a quick learner by using simple and scalable solutions. I enjoy creating user experience design, interfaces, web development, and mobile responsive.
                        </p>
                    </div>
                </div>
            </div>




            <div className="my-28 flex justify-evenly items-center flex-col scroll-mt-20">

                <Heading title="Education" />
            </div>
            <div data-aos="fade-up" className="flex justify-around items-center flex-col md:flex-row  ">
                <div class="flex justify-center  py-8 md:px-5 hover:animate-iron">
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


                <div class="flex justify-center py-8 md:px-5 hover:animate-iron">
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
                <div class="flex justify-center py-8 md:px-5  hover:animate-iron">
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
    )
}
export default About;




