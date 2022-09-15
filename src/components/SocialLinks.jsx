import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/carlosluisprado/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/crafzito111",
        },
    
        {
            id: 3,
            child: (
                <>
                    Whatsapp <IoLogoWhatsapp size={30} />
                </>
            ),
            href: "https://wa.me/584243390858",
        },
        {
            id: 4,
            child: (
                <>
                    Curriculum <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/public/Carlos Prado - FrontEnd Developer.pdf",
            style: "rounded-br-md",
            download: true,
        },
     
    ];
  return (
      <div className='col1'>
     
          <div className="hidden lg:flex flex-col top-[40%] left-0 fixed">
              <ul>
                  {links.map(({ id, child, href, style, download }) => (
                      <li
                          key={id}
                          className={
                              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                              " " +
                              style
                          }
                      >
                          <a
                              href={href}
                              className="flex justify-between items-center w-full text-white"
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
         
        </div>
    );
};

export default SocialLinks