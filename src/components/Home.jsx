import React from 'react'
import imageYo from "../assets/yooo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';


const Home = () => {
  return (
      <div name="home" className="min-h-screen flex items-center w-full bg-gradient-to-b from-black via-black to-gray-800">

          <div className="max-w-screen-lg   mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row textVer">
              <div className=" flex  flex-col justify-center  h-full mt-20">
                  <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I´m a FrontEnd Developer
                </h2>
                  <p className="text-gray-500 py-4 ">
                      Hola!✋ Soy Carlos un Desarrollador Front-end.

                      Me caracterizo por ser una persona resiliente dispuesto a trabajar en equipo de la cual siempre esta dispuesto aprender y escuchar distintos puntos de vista.

                      Y cada dia motivado a aprender cosas nuevas🚀
                </p>

                <div>
                    <Link to='portfolio' smooth duration={600} className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='imageYoo'>
                  <img src={imageYo} alt="My picture" className="rounded-2xl  mx-auto w-2/3 md:w-full " />
            </div>
        </div>
    </div>
  )
}

export default Home