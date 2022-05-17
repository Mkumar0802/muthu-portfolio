import React from 'react'

function SocialLinks({ alignment = 'start' }) {
    return (
        <div className='static '>

        
        <div className={`flex   justify-center lg:justify-${alignment}`}>
            
            <a href="https://github.com/Mkumar0802/" target="_blank" rel="noreferrer" className="mr-3 text-3xl md:text-5xl">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/muthu-kumar-k-1011453a/" target="_blank" rel="noreferrer" className="mr-3 text-3xl md:text-5xl">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <div className='flex md:flex mb-1   ' >
                <a href="https://drive.google.com/file/d/1a0Q6Zv_MM_gstKDAVy57CeRJvz7v7ZHd/view?usp=sharing/" target="_blank" rel="noreferrer" >
                    <svg xmlns="http://www.w3.org/2000/svg" class=" h-8 w-8  md:h-12 md:w-12 animate-wiggle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                    </svg>
                </a>
                <div className='py-1' >
                    <span className='  text-xl pb-2    md:text-3xl  '>Resume</span>


                </div>

            </div>

            </div>
        </div>
    )
}

export default SocialLinks;




