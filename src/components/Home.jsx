import React from "react";
import HeroImage from "../assets/heroImage2.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import "./Home.css";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <>
      {/*social icons */}

      <div
        style={{ color: "white", position: "fixed", top: "350px" }}
        className="flex-col "
      >
        <SocialLinks />
      </div>

      <div
        name="home"
        className="h-[100%] md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div
            style={{ color: "white" }}
            className="flex flex-col justify-center h-full mt-[50px] md:mt-0"
          >
            <h2 className="text-4xl sm:text-7xl font-bold" style={{marginRight: '15px;'}}>
              I’m a PHP Full Stack Developer
            </h2>
            <p className="py-4 max-w-md">
              with hands-on experience in building secure, scalable, and fully responsive web applications using modern technologies like PHP, Laravel, MySQL, HTML5, CSS3, SCSS, JavaScript (ES6), React.js 18, Tailwind CSS, jQuery, AJAX, Bootstrap, and Firebase V9.

              <br></br><br></br>
              I specialize in developing dynamic full-stack applications with clean UI/UX, REST APIs, authentication systems, database management, and responsive frontend interfaces. I also have experience working with Git/GitHub, MVC architecture, OOP concepts, and integrating modern frontend technologies with backend systems to build real-world web applications.
            </p>

            <div>
               
              <a href="#portfolio">
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <HiOutlineArrowRight size={20} className="ml-1" />
              </span>
            </button>
              </a>
              

            </div>
          </div>

          <div className="hero mt-[25px] md:mt-0">
            <img
              src={HeroImage}
              alt="hero-profile"
              className="rounded-2xl mx-auto w-full md:w-[500px]"
            />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;
