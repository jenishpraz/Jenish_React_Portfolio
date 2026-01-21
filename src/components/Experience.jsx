import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import reactImage from "../assets/reactImage.svg";
import tailwind from "../assets/tailwind.svg";
import github from "../assets/github.jpg";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "TailWind", style: "shadow-sky-400 pt-6" },
    { id: 6, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <div
      name="Experience"
      className="w-full min-h-screen flex items-center justify-center pt-20 bg-white dark:bg-[#0a1120] text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline xl:text-5xl">
            Experience
          </p>
          <p className="py-6 xl:text-xl">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-gray-900 dark:text-gray-100">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
