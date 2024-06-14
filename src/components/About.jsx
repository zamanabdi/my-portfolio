import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100% bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center pb-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0 mt-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8 md:mt-20">
          {/* I am a Civil engineering graduate as well as a passionate & innovative
          Frontend Web Developer. I Completed my BTech in civil engineering from
          Maharshi Dayanand university in 2017 and currently I am working as a
          civil site engineer at Dragon Age Realtors Pvt Ltd Lucknow. I am
          really passionate for coding, hence alongside my job I pursued a
          Frontend Development course from Relevel By Unacademy , During the
          course I created multiple industry level projects using HTML5 , CSS3 ,
          SASS , JAVASCRIPT (ES6), Firebase V9, strapi headless cms and React.js
          18 etc.*/}

          Passionate about crafting engaging user experiences and bringing designs to life through code, I am a skilled frontend developer with a keen eye for detail and a commitment to excellence. With a solid foundation in HTML, CSS, and JavaScript, coupled with expertise in modern frontend framework like React, I thrive in turning complex ideas into intuitive and visually appealing interfaces.
           
          <br/>
          <br/>

          Driven by a creative flair and a dedication to staying updated with the latest trends and technologies in web development,I excel in collaborating with designers and backend developers to deliver seamless and responsive web applications. Whether it's optimizing performance, ensuring cross-browser compatibility, or enhancing accessibility, I am adept at tackling challenges and finding elegant solutions to elevate the user experience.
          <br/>
          <br/>
          With a portfolio showcasing a diverse range of projects, from sleek single-page applications to dynamic e-commerce platform, I demonstrate a passion for innovation and a commitment to delivering high-quality frontend solutions that resonate with users. Ready to tackle new challenges and contribute to the ever-evolving landscape of web development, I am dedicated in pushing boundaries and creating immersive digital experiences that leave a lasting impression.
          
          
        </p>

        <br />

        

      </div>
    </div>
  );
};

export default About;
