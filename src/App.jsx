import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="bg-white dark:bg-[#0a1120] text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
      <Navbar />
      {/* <ThemeToggle /> */}
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default App;
