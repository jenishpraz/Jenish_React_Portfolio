import { data } from "../data/Data.js";
import React from "react";

const Portfolio = () => {
  const projects = data;

  return (
    <div
      name="Portfolio"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-center px-4 py-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Title */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-500 xl:text-5xl">
            Portfolio
          </p>
          <p className="pt-6 xl:text-xl">Some of my work are below</p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {projects.map(({ id, name, image, github, live }) => (
            <div
              key={id}
              style={{ backgroundImage: `url(${image})`, height: "15rem" }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto bg-contain bg-no-repeat"
            >
              {/* Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100 bg-gradient-to-t from-gray-700 to-gray-500 w-full h-full pt-10 rounded-md hover:duration-200">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {name}
                </span>
                <div className="pt-8 text-center">
                  <a href={github} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-500 text-white font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a href={live} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-green-500 text-white font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
