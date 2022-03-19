import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import mongodb from "../assets/mongodb.png"
import mysql from "../assets/mysql.png"
import npm from "../assets/npm.png"
import git from "../assets/github.png"
import boot from "../assets/boot.png"
import express from "../assets/express.png"
import tailwind from "../assets/tailwind.png"
import Heading from './Heading'





function Skill() {
  return (
    <div className="my-28 flex justify-evenly items-center flex-col scroll-mt-20 ">
            <Heading title="Skills"/>
    <div className="w-screen h-screen blue-gradient-background gradient-background-animated  lg:pt-5">
      <div className="w-full h-4/6 lg:h-5/6 flex flex-col-reverse lg:flex-row justify-center">
        <div className="flex justify-around items-center lg:w-1/2 w-full lg:h-full">
          <div className="mx-auto w-max text-center lg:text-left pl-0 md:pl-2 xl:pl-0">
            <div className=" grid grid-cols-2 gap-5 pt-10 md:grid-cols-3 md:gap-4 items-center     md:flex-row flex-col m-20">
              
              <div className="grid-rows grid-flow-col  bg-white hover:bg-slate-300 w-12 h-12 animate-wiggle    md:animate-wiggle    md:w-20 md:h-20   md:flex-col  ">
                <img src={html} alt="html" />
              </div>
              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300 animate-wiggle     w-12 h-12   md:animate-cap  md:flex-col md:w-20 md:h-20 '>
                <img src={css} alt="css" />
              </div>
              <div className='grid-rows grid-flow-col  bg-white hover:bg-slate-300 animate-cap  w-12 h-12  md:animate-wiggle   md:flex-col md:w-20 md:h-20'>
                <img src={js} alt="js" />
              </div>
              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300 animate-cap  w-12 h-12  md:animate-cap md:flex-col md:w-20 md:h-20'>
                <img src={boot} alt="boot" />
              </div>

              <div className='grid-rows grid-flow-col  bg-white hover:bg-slate-300 animate-wiggle     w-12 h-12   md:animate-wiggle  md:flex-col md:w-20 md:h-20'>
                <img src={react} alt="react" />
              </div>

              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300 animate-wiggle   w-12 h-12   md:animate-cap   md:flex-col md:w-20 md:h-20'>
                <img src={node} alt="node" />
              </div>

              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300 animate-cap    w-12 h-12   md:animate-wiggle md:flex-col md:w-20 md:h-20'>
                <img src={mongodb} alt="mongodb" />
              </div>

              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300  animate-cap   w-12 h-12   md:animate-cap md:flex-col md:w-20 md:h-20'>
                <img src={npm} alt="npm" />
              </div>
              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300  animate-wiggle   w-12 h-12   md:animate-wiggle md:flex-col md:w-20 md:h-20 pt-5'>
                <img src={express} alt="express" />
              </div>
              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300  animate-wiggle   w-12 h-12   md:animate-cap md:flex-col md:w-20 md:h-20 pt-5'>
                <img src={tailwind} alt="tailwind" />
              </div>
              <div className='grid-rows grid-flow-col  bg-white hover:bg-slate-300 animate-cap w-12 h-12    md:animate-wiggle md:flex-col md:w-20 md:h-20 '>
                <img src={git} alt="git" />
              </div>
              <div className='grid-rows grid-flow-col  bg-white hover:bg-slate-300 animate-cap    w-12 h-12   md:animate-cap   md:flex-col md:w-20 md:h-20'>
                <img src={mysql} alt="mysql" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skill;