import React, { useEffect } from "react";
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import nodejs from "../assets/node.png"
import mongodb from "../assets/mongodb.png"
import mysql from "../assets/mysql.png"
// import npm from "../assets/npm.png"
// import git from "../assets/github.png"
// import boot from "../assets/boot.png"
import express from "../assets/express.png"
import tailwindcss from "../assets/tailwind.png"
import foodapp from "../assets/fooapp.png"
import ticketbooking from "../assets/ticketbooking.png"
import simple from "../assets/simple.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const assertMap = {
    food_ordering: foodapp,
    booking_system:ticketbooking,
    simple: simple,
    html,
    css,
    js,
    nodejs,
    react, 
    mongodb,
    mysql,
    tailwindcss,
    express,
    
};


const Button = ({ link, children }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, [])


    return (
        <a
            className=" text-white  px-4 py-2 bg-teal-600 hover:bg-teal-700  transition-dark 
            rounded-lg flex items-center gap-2 hover:ring-4 ring-cyan-400"
            href={link}
            target={"_blank"} rel="noreferrer">
            {children}
        </a>
    );
};

const ProjectCard = ({ project }) => {
    const { title, desc, image, url, built,} = project;
    



    return (


        <div    className="flex gap-4 my-10 justify-center md:items-start items-center md:flex-row flex-col w-fit">
            <div data-aos="fade-left" className="p-4 group transition-dark bg-slate-200  rounded-lg ">
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={assertMap[image]}
                        className="transition-transform duration-1000 transform group-hover:scale-150 w-96"
                        alt=""
                    />
                </div>
            </div>
            <div data-aos="fade-right"   className="flex flex-col justify-evenly gap-4 max-w-sm">
                <h2 className="text-2xl text-black font-mono ">{title}</h2>

                <p className="max-w-[45ch] text-justify">{desc}</p>
                {/* <h3>Built Using</h3> */}
                <div className="flex gap-4 flex-wrap items-center">
                    {built.map((tech, index) => (
                        <div
                            key={index}
                            className="w-8 h-8 flex justify-center items-center 
                            bg-gray-300 p-1 rounded-lg transition-dark">
                            <img src={assertMap[tech]} className="" alt={tech} />
                        </div>
                    ))}
                </div>
                <div className="space-x-4 flex justify-between">
                <Button link={url.live}>
                    Live
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </Button>
                <Button link={url.frontend}>
                    Client
                    <span className="text-xl"><ion-icon name="logo-github"></ion-icon></span>
                </Button>
                <Button link={url.backend}>
                    Server
                    <span className="text-xl"><ion-icon name="logo-github"></ion-icon></span>
                    
                </Button>
                {/* 
                    <Button link={url.backend} action={"Backend Code"} /> */}


            </div>
            </div>
           

        </div>
    )

}




export default ProjectCard;