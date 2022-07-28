
import { projects } from '../data/Fdata'
import FrontendProject from '../Pages/FronendProjectcard';
import Heading from './Heading';

function FrontendProjects() {


    return (
        <div
            id="project "
            className="my-28 flex justify-evenly items-center flex-col text-black scroll-mt-20">
            <Heading title=" UI Projects" />
            <div className="mt-10 flex flex-col items-center">

                {projects.map((project, index) => (
                    <FrontendProject key={index} project={project} ltr={index % 2 === 1} />
                ))}
            </div>
        </div>
    );
}



export default FrontendProjects;