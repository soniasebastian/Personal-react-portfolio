import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-black">
            <a href="https://git.io/typing-svg">
              <img src="https://readme-typing-svg.herokuapp.com/?lines=Hello,+There!+👋;I+am+Sonia+Sebastian....;&center=true&size=30" />
            </a>
          </h1>
          <p className="mb-6 text-xl leading-relaxed">
            I am a full stack web developer with passion for software and web
            development. I am a highly motivated developer with an aptitude to
            learn new technolgies. I possess an arsenal of skills in HTML, CSS,
            JavaScript, React, Node, Express, MongoDB and MySQL.
          </p>
          <p className="mb-6 text-xl leading-relaxed">
            I am also a team player who thrives in collaborating with
            cross-functional teams to produce outstanding web applications.With
            a detail-oriented approach, and problem solving abilities I am
            dedicated to software development expecting to meet user criterias.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Avatar.jpg"
          />
        </div>
      </div>
    </section>
  );
}
