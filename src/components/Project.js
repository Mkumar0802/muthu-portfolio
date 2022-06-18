
import { projects } from '../data'
import ProjectCard from '../Pages/Projectcard';
import Heading from './Heading';
import FrontendProjects from './FrontendProject';


function Projects() {


    return (
        <div
            id="project"
            className="my-28 flex justify-evenly items-center flex-col text-black scroll-mt-20">
            <Heading title="Projects" />
            <div className="mt-10 flex flex-col items-center">
                <div>
                    <h1 className=' text-xl   md:text-3xl text-black font-mono'>
                        Demo Credentials
                    </h1>
                    <p className=' text-xl   md:text-2xl text-black font-mono'>
                        Email: testuser@gmail.com
                    </p>
                    <p className=' text-xl   md:text-2xl text-black font-mono'>
                        password: user@123
                    </p>
                </div>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} ltr={index % 2 === 1} />
                ))}
            </div>
              
           < FrontendProjects/>   
        </div>
    );
}



export default Projects;