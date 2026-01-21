import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full min-h-screen bg-gradient-to-t from-black to-gray-800 text-gray-300 flex items-center justify-center px-4"
    >
      <div className="max-w-[1000px] w-full flex flex-col justify-center">
        {/* Section Title */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Me
            </span>
          </p>
        </div>

        {/* Section Content */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="sm:text-right text-3xl sm:text-4xl font-bold">
            <p className="leading-snug">
              Hello, I’m <span className="text-gray-50">Jenish Prajapati</span>.
              <br />
              Welcome to my portfolio.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed tracking-wide text-gray-200">
              I’m a web developer passionate about building dynamic and visually
              engaging websites. With a strong foundation in{" "}
              <span className="font-semibold text-white">JavaScript</span> and{" "}
              <span className="font-semibold text-white">ReactJS</span>, I
              create user-friendly and innovative solutions. I specialize in{" "}
              <span className="font-semibold text-white">Tailwind CSS</span> and
              have experience deploying and maintaining modern web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
