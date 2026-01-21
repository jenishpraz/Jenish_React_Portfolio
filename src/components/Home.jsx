import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import HeroImg from "../assets/Hero.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="Home"
      className="relative flex items-center justify-center min-h-screen px-8 lg:px-16 pt-20 pb-10 overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-[120px]" />

      <div className="container mx-auto flex items-center justify-between gap-12 z-10 w-full">
        <div className="w-1/2 ml-8 lg:ml-16">
          <h2 className="text-blue-600 dark:text-blue-400 font-mono mb-2 text-lg">
            Hi, I am
          </h2>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Web Developer
            </motion.span>
          </motion.h1>

          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg lg:text-xl">
            I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I enjoy trying new things 😋
            My goal is to deliver high-quality code and optimal user experiences 🧑‍💻.
          </p>

          <Link
            to="Portfolio"
            smooth
            duration={500}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Portfolio
            <FaArrowRight className="ml-3" />
          </Link>
        </div>

        <div className="w-1/2 flex justify-end">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-yellow-500 rounded-full blur opacity-30" />
            {/* <img
              src={HeroImg}
              alt="Hero"
              className="relative w-[30rem] rounded-full shadow-2xl animate-float"
            /> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Home;
