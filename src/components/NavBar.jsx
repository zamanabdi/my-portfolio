import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";
import "./Navbar.css";

const NavBar = () => {
  const [nav,setNav] = useState(false);


  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 sticky top-0 left-0 md:sticky md:top-0 md:left-0">
      <div>
        <h1 className="text-5xl font-signature ml-2">ZAMAN</h1>
      </div>
       
      {/* desktop view */}
      <ul className="hidden md:flex">
        {links.map((item) => {
          const { id, link } = item;

          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-gray-400 duration-200"
              style={{ fontSize: "16px", textTransform: "uppercase" }}
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          );
        })}
      </ul>


        {/* for mobile view */}

       <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
        {
          nav? <FaTimes size={30}/> : <FaBars size={30}/> 
        }
       </div>
        {
          nav && <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 kuch-karo">

          {links.map((item) => {
           const { id, link } = item;
   
           return (
             <li
               key={id}
               className="px-4 cursor-pointer capitalize py-6 text-4xl"
             >
             <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
               
             </li>
           );
         })}
          
          </ul>
        }
       

    </div>
  );
};

export default NavBar;
