import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const linkSocial = [
    { id: 101, child: <>Linkedin <FaLinkedin size={30} /></>, href: "https://www.linkedin.com/in/prajapati-jenish-b9a3bb191/", style: "rounded-tr-md" },
    { id: 102, child: <>Github <FaGithub size={30} /></>, href: "https://github.com/jenishpraz/" },
    { id: 103, child: <>Mail <HiOutlineMail size={30} /></>, href: "mailto:prajapatijenish37@gmail.com" },
    { id: 104, child: <>Resume <BsFillPersonLinesFill size={30} /></>, href: "/public/Jenish_Prajapati_CV.pdf", style: "rounded-br-md", download: true },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[33%] left-0 fixed">
      <ul>
        {linkSocial.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400 dark:bg-gray-700 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white dark:text-gray-100"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
