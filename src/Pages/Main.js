import React from 'react'
import Typewriter from 'typewriter-effect';
import portfolioImage from '../assets/3.png'
import SocialLinks from '../components/SocialLinks';

function Main() {
    return (
        <div className=''>
            <div className="w-screen h-screen blue-gradient-background gradient-background-animated  text-white lg:pt-5 ">
                <div className="w-full h-4/6 lg:h-5/6 flex flex-col-reverse lg:flex-row justify-center">
                    <div className="flex justify-around items-center lg:w-1/2 w-full lg:h-full">
                        <div className="mx-auto w-max text-center lg:text-left pl-0 md:pl-2 xl:pl-0">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl">Muthu Kumar.K</h1>
                            <Typewriter
                                options={{
                                    strings: ['Full-stack Developer', 'Mern-stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: 'text-md md:text-2xl lg:text-3xl font-mono',
                                    cursorClassName: 'text-md md:text-2xl lg:text-3xl'
                                }}
                            />
                            <SocialLinks />
                        </div>
                    </div>
                   
                        <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center ] ">
                            <div className="w-60 h-60 md:w-80 md:h-80 lg:w-3/6 max-h-full max-w-full lg:h-auto overflow-hidden  flex justify-center animate__animated animate__flipInY animate__fast">
                                <img src={portfolioImage} alt="muthukumar" />
                            </div>
                        </div>
                    

                </div>

                <div className="flex justify-around items-center flex-col w-full lg:h-1/6 h-2/6 pb-24 ">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  lg:h-10 lg:w-10 animate-cap " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div>
            </div>


        </div>

    )
}

export default Main;













