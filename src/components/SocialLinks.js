import React from 'react'

function SocialLinks({ alignment = 'start' }) {
    return (
        <div className={`flex mt-3 justify-center lg:justify-${alignment}`}>
            <div className="justify-start hidden"></div>
            <div className="justify-center hidden"></div>
            <a href="https://github.com/Mkumar0802/" target="_blank" rel="noopener noreferrer" className="mr-3 text-3xl md:text-5xl">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="linkedin.com/in/muthu-kumar-k-1011453a/" target="_blank" rel="noopener noreferrer" className="mr-3 text-3xl md:text-5xl">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>


            <a href="https://drive.google.com/file/d/1qcKI-eYrreRg6fdQfCp9B7UYm-rwxUFA/view?usp=sharing/" target="_blank" >
                <svg xmlns="http://www.w3.org/2000/svg" class=" h-8  md:h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg> 
            </a>
            <div className=' ' > 
            <span className='  text-xl font-bold   md:text-3xl px-2 my-2   '>My Resume</span>

        
             </div>




        </div>
    )
}

export default SocialLinks;




