import React from 'react';
import Main from '../Pages/Main';
import Skill from './Skill';
import About from './About';

function Home() {
    return (
        <div className='bg-cyan-400 w-full h-screen '>
            <div>
                <Main />
                <Skill/>
                <About/>

            </div>

        </div>




    )
}

export default Home;
