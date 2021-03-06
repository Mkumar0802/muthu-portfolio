import React from 'react';
import Main from '../Pages/Main';
import Skill from './Skill';
import About from './About';
import Footer from '../Pages/Footer';
import Contact from './Contact';
import Projects from './Project';


function Home() {
    return (
        <div className='bg-cyan-400 w-full h-screen '>
            <div>
                <Main />
                <About />
                <Skill />
                <Projects /> 
                <Contact />
                <Footer />


            </div>

        </div>




    )
}

export default Home;
