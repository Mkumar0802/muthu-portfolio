
import {projects} from '../data'
import ProjectCard from '../Pages/Projectcard';
import Heading from './Heading';


function Projects() {
    

    return (
        <div
            id="project"
            className="my-28 flex justify-evenly items-center flex-col text-black scroll-mt-20">
             <Heading title="Projects" />
            <div className="mt-10 flex flex-col items-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} ltr={index % 2 === 1} />
                ))}
            </div>
        </div>
    );
}



export default Projects;