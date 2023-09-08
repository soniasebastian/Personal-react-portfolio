import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-blue-400 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I continuously stay updated with emerging technologies to deliver 
          innovative solutions and drive results and currently working in <b>MERN stack</b>.
          </p>
        </div>
        <div className="flex flex-wrap sm:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 lg:w-1/4 w-1/4">
              <div className="bg-gray-800 rounded flex p-4 items-center">
                

                  <img src={skill.image} className="h-full w-1/2 "/>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}