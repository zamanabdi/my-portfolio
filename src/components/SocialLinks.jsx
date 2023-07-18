import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id:1,
      child:(<>
        Linkedin <FaLinkedin size={30}/>
        </>),
        href:'https://www.linkedin.com/in/zaman-abidi-003925269/',
        style:'rounded-tr-md',
    },
    {
      id:2,
      child:(<>
        GitHub <FaGithub size={30}/>
        </>),
        href:'https://github.com/zamanabdi',
        
    },
    {
      id:3,
      child:(<>
        Mail <HiOutlineMail size={30}/>
        </>),
        href:'mailto:zaman.abdi24@gmail.com',
    },
    {
      id:4,
      child:(<>
        Resume <BsFillPersonLinesFill size={30}/>
        </>),
        href:'/resume.pdf',
        style:'rounded-br-md',
        download:true,
    },
  ]


  return (
    <div className="hidden lg:flex flex-col fixed">
      <ul>
      {
        links.map((item) => {
           
          const {id,child,href,style,download} = item;

          return(
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]" + " " + style}>


          <a href={href} className="flex justify-between items-center w-full text-white" target="blank" download={download} rel="noreferrer">
            {
              child
            }
          </a>
        </li>

          )
        })
      }
        


      </ul>
    </div>
  );
};

export default SocialLinks;
