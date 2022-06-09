import React, { useEffect } from "react";
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import mongodb from "../assets/mongodb.png"
import mysql from "../assets/mysql.png"
// import npm from "../assets/npm.png"
// import git from "../assets/github.png"
import boot from "../assets/boot.png"
import express from "../assets/express.png"
import tailwind from "../assets/tailwind.png"
import Heading from './Heading'
import AOS from 'aos';
import 'aos/dist/aos.css';




function Skill() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  return (
    <div className="my-28 flex justify-evenly items-center flex-col scroll-mt-20 ">
      <Heading title="Skills" />

      <div className='py-12'>



        <div  className=' flex space-x-10 md:space-x-48 justify-center'>
          <div data-aos="fade-up-right"  >
            <div className='px-3'>
              <h1 className='text-2xl  font-mono '>
                Frontend
              </h1>
            </div>

            <   div className='grid grid-cols-2'>

              <div className="grid-rows grid-flow-col  bg-white hover:bg-slate-300 w-12 h-12    md:w-20 md:h-20   md:flex-col  ">
                <img src={html} alt="html" />
              </div>
              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300     w-12 h-12    md:flex-col md:w-20 md:h-20 '>
                <img src={css} alt="css" />
              </div>
              <div className='grid-rows grid-flow-col  bg-white hover:bg-slate-300  w-12 h-12    md:flex-col md:w-20 md:h-20'>
                <img src={js} alt="js" />
              </div>
              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300  w-12 h-12   md:flex-col md:w-20 md:h-20'>
                <img src={boot} alt="boot" />
              </div>

              <div className='grid-rows grid-flow-col  bg-white hover:bg-slate-300     w-12 h-12    md:flex-col md:w-20 md:h-20'>
                <img src={react} alt="react" />
              </div>
              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300   w-12 h-12    md:flex-col md:w-20 md:h-20 pt-5'>
                <img src={tailwind} alt="tailwind" />
              </div>
            </div>
          </div>




          <div data-aos="fade-up-left" >
            <div >
              <h1 className='text-2xl  font-mono '>Backend</h1>
            </div>
            <div className='grid grid-cols-2'>
              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300    w-12 h-12     md:flex-col md:w-20 md:h-20'>
                <img src={node} alt="node" />
              </div>

              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300    w-12 h-12  md:flex-col md:w-20 md:h-20'>
                <img src={mongodb} alt="mongodb" />
              </div>
              <div className='grid-rows grid-flow-col bg-white hover:bg-slate-300     w-12 h-12   md:flex-col md:w-20 md:h-20 pt-5'>
                <img src={express} alt="express" />
              </div>
              <div className='grid-rows grid-flow-col  bg-white hover:bg-slate-300    w-12 h-12    md:flex-col md:w-20 md:h-20'>
                <img src={mysql} alt="mysql" />
              </div>
            </div>

          </div>
        </div>

      </div>



    </div>
  )
}

export default Skill;


















