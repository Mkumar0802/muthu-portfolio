
import React from "react";

const Heading = ({ title }) => {
    return (
        <div className="">
            <div className="text-5xl ">{title}</div>
            <div className=" w-16 -bottom-2 left-0 right-0 mx-auto h-[4px] rounded-full bg-red-500 dark:bg-red-600 transition-dark"></div>
        </div>
    );
};

export default Heading;