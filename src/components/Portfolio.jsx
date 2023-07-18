import React from "react";
import movix from "../assets/portfolio/movix.png";
import propertyWale from "../assets/portfolio/propertywale.png";
import cryptoImage from "../assets/portfolio/crypto.png";
import googleImage from "../assets/portfolio/google.png";
import chaiwala from "../assets/portfolio/chaiwala.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: movix,
      demoLink:"https://zamanali-movix-app.netlify.app/",
      codeLink:"https://github.com/zamanabdi/Movie-app",
    },
    {
      id: 2,
      src: propertyWale,
      demoLink:"https://propertywale.vercel.app/",
      codeLink:"https://github.com/zamanabdi/propertywale",
    },
    {
      id: 3,
      src: cryptoImage,
      demoLink:"https://zamanali-crypto-app.netlify.app/",
      codeLink:"https://github.com/zamanabdi/crypto-app",
    },
    {
      id: 4,
      src: googleImage,
      demoLink:"https://zamanali-google-search-clone.netlify.app/",
      codeLink:"https://github.com/zamanabdi/google-search-clone",
    },
    {
      id: 5,
      src: chaiwala,
      demoLink:"https://zamanali-mbachaiwala.netlify.app/",
      codeLink:"https://github.com/zamanabdi/google-search-clone",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink:"https://zamanali-movix-app.netlify.app/",
      codeLink:"https://github.com/zamanabdi/google-search-clone",
    },
    
    
    
  ];

  return (
    <div
      id="portfolio"
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-5 px-12 sm:px-0"
        >
          {portfolios.map((item) => {
            const { id, src ,demoLink,codeLink} = item;

            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="weather"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">

                <a href={demoLink} target="blank">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
                </a>
                  
                  <a href={codeLink} target="blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                  </a>

                  

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
