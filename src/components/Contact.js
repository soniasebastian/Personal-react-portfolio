import React from "react";


export default function Contact() {
  // const handleSubmit =  () => {
  //   if 
  // }

  return (
    <section id="contact" className="relative">
    <div className="container px-5 py-10 mx-auto flex flex-wrap justify-center items-center">
      <form
        // onSubmit={}
        netlify
        name="contact"
        className="w-full md:w-1/2 md:mr-auto mb-6 md:mb-0"
      >
          <h2 className="text-blue-400 sm:text-4xl text-3xl text-center mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-white">
          Thank you for visiting my portfolio! If you have any inquiries, collaboration opportunities, or just want to say hello, 
          please feel free to reach out to me. I'm always excited to connect with fellow professionals, clients, and enthusiasts.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className=" text-white leading-7 text-sm text-">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900  h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-4">
            Submit
          </button>
          </form>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Hireme.jpg"
          />
        </div>
      </div>
    </section>
  );
}



