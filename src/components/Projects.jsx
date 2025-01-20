import React from "react";
import CoolCard from "./CoolCard";

function Projects(){
    return(
        <>
        <div id="projects" className="bg-[#afafac] text-white font-['Manrope'] max-w-7xl mx-auto flex flex-col items-center">
            <h1>Projects section</h1>
            <CoolCard />
            <CoolCard />
            <CoolCard />
            <CoolCard />
            <CoolCard />
        </div>
        </>
    )
}

export default Projects