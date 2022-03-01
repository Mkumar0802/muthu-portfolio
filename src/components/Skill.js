import React from 'react'
import html from "../assets/bootstrap.png"
// import git from "../assets/github.png"



// const Card = ({ alt }) => {
//   return (
//     <div
//       className="absolute bottom-[95%] right-[95%] z-[5] hidden
//                 group-hover:block text-cyan-500
//                 bg-teal-500  dark:bg-teal-900  rounded-md transition-dark 
//                 px-2 py-1 w-fit whitespace-nowrap">
//       {alt} </div>

//   )
// }


function Skill() {
  return (
    <div className="w-screen h-screen blue-gradient-background gradient-background-animated  lg:pt-5">
      <div className="w-full h-4/6 lg:h-5/6 flex flex-col-reverse lg:flex-row justify-center">
        <div className="flex justify-around items-center lg:w-1/2 w-full lg:h-full">
          <div className="mx-auto w-max text-center lg:text-left pl-0 md:pl-2 xl:pl-0">
          <div className="flex items-center md:flex-row flex-col my-10">
                <div className="flex flex-row md:flex-col ">
                <img src={html} alt="muthukumar" />
                </div>
</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill;