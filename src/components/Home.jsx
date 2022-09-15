import React from 'react'
import imageYo from "../assets/yooo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';


const Home = () => {
  return (
      <div name="home" className="home__main z-10 min-h-screen  flex items-center w-full bg-gradient-to-b from-black via-black to-gray-800">

          <div className="max-w-screen-lg   mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row textVer">
              <div className=" flex  flex-col justify-center  h-full mt-20">
                  <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I´m a FrontEnd Developer
                </h2>
                  <p  className="text-gray-500 py-4 ">
                      Hola!✋ Soy Carlos un Desarrollador Front-end.

                      Me caracterizo por ser una persona resiliente dispuesto a trabajar en equipo de la cual siempre esta dispuesto aprender y escuchar distintos puntos de vista.

                      Y cada dia motivado a aprender cosas nuevas🚀
                </p>

                  <div className='btns_portfolio_main'>
                      <div className='z-5'>
                          <Link to='portfolio' smooth duration={600} className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                              Portfolio
                              <span className='group-hover:rotate-90 duration-300'>
                                  <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                              </span>
                          </Link>
                      </div>
                      <div className='btns_portfolio_cv'>
                          <button className="download-button">
                              <div className="docs"><svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> CV</div>
                            <a href="/public/Carlos Prado-FrontEnd-Developer.pdf" download={true}>
                                 
                                  <div className="download">
                                      <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                                  </div>
                            </a>
                          </button>
                    </div>
            </div>
            </div>
            <div className='imageYoo'>
                  <img src={imageYo} alt="My picture" className="rounded-2xl  mx-auto w-2/3 md:w-full " />
            </div>
        </div>

          <section className='scrol__main'>
              <Link to='about' smooth duration={600}>
                  <a href="#" class="scroll-down" address="true"></a>
              </Link>
          </section>
        

    </div>
  )
}

export default Home