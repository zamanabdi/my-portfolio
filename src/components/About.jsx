import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center pb-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0 mt-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8 md:mt-20">
          I am a Civil engineering graduate as well as a passionate & innovative
          Frontend Web Developer. I Completed my BTech in civil engineering from
          Maharshi Dayanand university in 2017 and currently I am working as a
          civil site engineer at Dragon Age Realtors Pvt Ltd Lucknow. I am
          really passionate for coding, hence alongside my job I pursued a
          Frontend Development course from Relevel By Unacademy , During the
          course I created multiple industry level projects using HTML5 , CSS3 ,
          SASS , JAVASCRIPT (ES6), Firebase V9, strapi headless cms and React.js
          18 etc.
        </p>

        <br />

        <p className="text-xl">
          Currently also I am working on a few more large scale projects to
          enhance my web development skills , currently they are under
          development. I am really looking forward to work in an organization as
          a Frontend developer , UI/UX Developer , React.js Developer or as a
          Frontend Engineer. kindly contact me if you find my Projects
          interesting.
        </p>
      </div>
    </div>
  );
};

export default About;
