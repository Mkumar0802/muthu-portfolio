import React from 'react'
import Typewriter from 'typewriter-effect';
import portfolioImage from '../assets/3.png'

function Main() {
    return (
        <div className='bg-cyan-400 text-3xl font-bold justify-center p-24'>
            <div className="grid grid-cols-2   ">



                <div className='  sm:mx-auto  py-20 md:mx-44 '>

                    <h1 className="">MuthuKumar</h1>
                    <Typewriter
                        options={{
                            strings: ['Full-Stack Developer'],
                            autoStart: true,
                            loop: true,

                        }}
                    />

                </div>

                <div className='bg-cyan-400 sm:mx-auto'>
                    <img className='w-60 h-60 md:w-80 md:h-80 ' src={portfolioImage}  alt="avatar"/>
                </div>

            </div>

        </div>

    )
}

export default Main;














// <div className='bg-sky-300 text-white py-20'>
//                 <div className="" >
//                     <div className="">
//                         <div className="row-span-2">


//                             <h3 className="text-4xl justify-right  md:text-5xl  lg:text-5xl">MuthuKumar</h3>
<Typewriter
    options={{
        strings: ['Full-stack Developer', ' Electrical And Electronics Engineer'],
        autoStart: true,
        loop: true,

    }}
/>
//                         </div>




//                     </div>

//                 </div>


//             </div>