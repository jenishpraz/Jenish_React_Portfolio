import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import frame from "../assets/Frame.svg"; // signature frame
// import logo from "../assets/signature-white.png";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Portfolio" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-md 
      bg-gradient-to-r from-[#0a1120]/90 via-[#0f172a]/90 to-[#020617]/90 
      shadow-lg border-b border-white/10 relative"
    >
      {/* 🔥 Signature Frame (Top Left) */}
    

      <div
        className="flex justify-between items-center h-16 md:h-14 
        px-6 md:px-16 lg:px-24 relative z-10"
      >
        {/* Logo */}
        <Link
          to="Home"
          smooth
          duration={500}
          className="cursor-pointer h-full flex items-center"
        >
         <img
        src={frame}
        alt="Signature Frame"
        className="h-[90%] opacity-80 pointer-events-none invert"
      />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="relative cursor-pointer font-semibold text-gray-100 
              after:content-[''] after:absolute after:w-0 after:h-[2px] 
              after:bg-cyan-400 after:left-0 after:-bottom-1 
              hover:after:w-full after:transition-all after:duration-300
              hover:text-cyan-400"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div
          onClick={() => setToggleNav(!toggleNav)}
          className="md:hidden cursor-pointer text-gray-100"
        >
          {toggleNav ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleNav && (
        <ul
          className="md:hidden flex flex-col justify-center items-center 
          w-full h-[90vh] bg-gradient-to-b from-[#020617] to-[#0f172a] 
          text-gray-100"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-4 text-3xl cursor-pointer hover:text-cyan-400 
              transition-all duration-300 transform hover:translate-x-2"
            >
              <Link
                onClick={() => setToggleNav(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
