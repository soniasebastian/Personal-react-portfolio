import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className=" bg-blue-400 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="mr-3 text-2xl font-bold font-serif ">
            Sonia Sebastian Moothedan</a>
        </a>
        <nav className="md:ml-auto md:mr-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="ml-5 text-white text-xl font-thin hover:bg-blue-700">
            About Me
          </a>
          <a href="#projects" className="ml-5  text-white text-xl font-thin hover:bg-blue-900">
          Portfolio
          </a>
          <a href="#skills" className="ml-5  text-white text-xl font-thin hover:bg-blue-900">
          Skills
          </a>
          <a href="#contact" className="ml-5  text-white text-xl font-thin hover:bg-blue-900">
          Contact
          </a>
          <a href={require("../Resume_Sonia.docx")} download="Sonia_resume" className="ml-5  text-white text-xl font-thin hover:bg-blue-900">
          Resume
          </a>
        </nav>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
      </div>
    </header>
  );
      }
