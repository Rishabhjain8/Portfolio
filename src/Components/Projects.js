import React, { useEffect } from 'react';
import { FaLaptopCode, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import newsshorts from '../newsshorts.png';
import shopex from '../shopex.png';
import workdiary from '../workdiary.png';
import chat from '../chat.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    });

    return (
        <div id='projects' className='skills-heading font-serif bg-violet-500 p-8 h-auto mdm:p-4 lg:h-auto mdm:pt-12 mdm:pb-10'>
            <div className='about-heading text-center text-3xl mdm:text-2xl font-semibold mb-8 text-yellow-300 flex items-center justify-center space-x-3'>
                <FaLaptopCode />
                <h1>Projects</h1>
            </div>
            <div className='projects-section flex flex-wrap justify-center items-center gap-24 mdm:gap-8'>
                <div data-aos="fade-up" className='project-section group perspective'>
                    <div className='project relative h-[24rem] w-72 mdm:h-80 mdm:w-64 smh:w-full group-hover:my-rotate-y-180 hover:shadow-2xl preserve-3d transition duration-1000 shadow-xl'>

                        <div className='project-front space-y-4 mdm:space-y-2 h-full w-full bg-yellow-300 px-1 py-1 absolute rounded-md backface-hidden'>
                            <div className='image'>
                                <img className='h-52 mdm:h-44 w-full rounded-md' src={newsshorts} alt='project-image' />
                            </div>
                            <div className='project-desc text-black space-y-2 text-center border-t-2 border-violet-900 pt-2'>
                                <h1 className='text-2xl mdm:text-xl text-violet-900 font-semibold'>NewsShort</h1>
                                <h2 className='text-sm'>Newsshort is a webapp made by using <span className='text-violet-900'>ReactJS</span> where user can read news in short.</h2>
                            </div>
                        </div>
                        <div className='project-back h-full w-full bg-violet-900 rounded-md px-2 py-1 absolute backface-hidden my-rotate-y-180'>
                            <div className='link flex flex-col justify-center items-center mdm:h-[40%] h-[45%] text-white cursor-pointer space-y-5'>
                                <a href='https://newsshort.netlify.app' target='_blank'>
                                    <div className='demo flex justify-center items-center text-xl gap-6'>
                                        <FaExternalLinkAlt />
                                        <p className='underline'>Demo</p>
                                    </div>
                                </a>
                                <a href='https://github.com/Rishabhjain8/newsapp' target='_blank'>
                                    <div className='code flex justify-center items-center text-xl gap-6 my-5 mdm:my-3'>
                                        <FaCode />
                                        <p className='underline'>Code</p>
                                    </div>
                                </a>
                            </div>
                            <div className='web-feature h-20 border-t-2 border-white w-full'>
                                    <ul className='flex flex-wrap justify-center items-center space-x-4 p-4 text-sm'>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>CSS3</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>React JS</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>News App</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className='project-section group perspective'>
                    <div className='project relative h-[24rem] w-72 mdm:h-80 mdm:w-64 smh:w-full group-hover:my-rotate-y-180 hover:shadow-2xl preserve-3d transition duration-1000 shadow-xl'>

                        <div className='project-front space-y-4 mdm:space-y-2 h-full w-full bg-yellow-300 px-1 py-1 absolute rounded-md backface-hidden'>
                            <div className='image'>
                                <img className='h-52 mdm:h-44 w-full rounded-md' src={shopex} alt='project-image' />
                            </div>
                            <div className='project-desc text-black space-y-2 text-center border-t-2 border-violet-900 pt-2'>
                                <h1 className='text-2xl mdm:text-xl text-violet-900 font-semibold'>Shopex</h1>
                                <h2 className='text-sm'>Shopex is a webapp made by using <span className='text-violet-900'>ReactJS, Tailwind CSS, MongoDB, Express JS</span> where various products are listed.</h2>
                            </div>
                        </div>
                        <div className='project-back h-full w-full bg-violet-900 rounded-md px-2 py-1 absolute backface-hidden my-rotate-y-180'>
                            <div className='link flex flex-col justify-center items-center mdm:h-[40%] h-[45%] text-white cursor-pointer space-y-5'>
                                <a href='https://shopex.vercel.app' target='_blank'>
                                    <div className='demo flex justify-center items-center text-xl gap-6'>
                                        <FaExternalLinkAlt />
                                        <p className='underline'>Demo</p>
                                    </div>
                                </a>
                                <a href='https://github.com/Rishabhjain8/ecommerce' target='_blank'>
                                    <div className='code flex justify-center items-center text-xl gap-6 my-5 mdm:my-3'>
                                        <FaCode />
                                        <p className='underline'>Code</p>
                                    </div>
                                </a>
                                
                            </div>
                            <div className='web-feature h-20 border-t-2 border-white w-full'>
                                    <ul className='flex flex-wrap justify-center items-center space-x-4 p-4 text-sm'>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>Tailwind CSS</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>React JS</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>MongoDB</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>Express JS</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className='project-section group perspective'>
                    <div className='project relative h-[24rem] w-72 mdm:h-80 mdm:w-64 smh:w-full group-hover:my-rotate-y-180 hover:shadow-2xl preserve-3d transition duration-1000 shadow-xl'>

                        <div className='project-front space-y-4 mdm:space-y-2 h-full w-full bg-yellow-300 px-1 py-1 absolute rounded-md backface-hidden'>
                            <div className='image'>
                                <img className='h-52 mdm:h-44 w-full rounded-md' src={workdiary} alt='project-image' />
                            </div>
                            <div className='project-desc text-black space-y-2 text-center border-t-2 border-violet-900 pt-2'>
                                <h1 className='text-2xl mdm:text-xl text-violet-900 font-semibold'>Work Diary</h1>
                                <h2 className='text-sm'>Workdiary is a webapp made by using <span className='text-violet-900'>MERN stack</span> where user can store his work, notes or day-to-day activities.</h2>
                            </div>
                        </div>
                        <div className='project-back h-full w-full bg-violet-900 rounded-md px-2 py-1 absolute backface-hidden my-rotate-y-180'>
                            <div className='link flex flex-col justify-center items-center mdm:h-[40%] h-[45%] text-white cursor-pointer space-y-5'>
                                <a href='http://workdiarys.herokuapp.com' target='_blank'>
                                    <div className='demo flex justify-center items-center text-xl gap-6'>
                                        <FaExternalLinkAlt />
                                        <p className='underline'>Demo</p>
                                    </div>
                                </a>
                                <a href='https://github.com/Rishabhjain8/MERN-workdairy' target='_blank'>
                                    <div className='code flex justify-center items-center text-xl gap-6 my-5 mdm:my-3'>
                                        <FaCode />
                                        <p className='underline'>Code</p>
                                    </div>
                                </a>
                                
                            </div>
                            <div className='web-feature h-20 border-t-2 border-white w-full'>
                                    <ul className='flex flex-wrap justify-center items-center space-x-4 p-4 text-sm'>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>Bootstrap</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>React JS</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>MongoDB</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>Express JS</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className='project-section group perspective'>
                    <div className='project relative h-[24rem] w-72 mdm:h-80 mdm:w-64 smh:w-full group-hover:my-rotate-y-180 hover:shadow-2xl preserve-3d transition duration-1000 shadow-xl'>

                        <div className='project-front space-y-4 mdm:space-y-2 h-full w-full bg-yellow-300 px-1 py-1 absolute rounded-md backface-hidden'>
                            <div className='image'>
                                <img className='h-52 mdm:h-44 w-full rounded-md' src={chat} alt='project-image' />
                            </div>
                            <div className='project-desc text-black space-y-2 text-center border-t-2 border-violet-900 pt-2'>
                                <h1 className='text-2xl mdm:text-xl text-violet-900 font-semibold'>Chat App</h1>
                                <h2 className='text-sm'>Chat app is a webapp made by using <span className='text-violet-900'>ReactJS, CSS</span> where user can chat with other peoples who are registered.</h2>
                            </div>
                        </div>
                        <div className='project-back h-full w-full bg-violet-900 rounded-md px-2 py-1 absolute backface-hidden my-rotate-y-180'>
                            <div className='link flex flex-col justify-center items-center mdm:h-[40%] h-[45%] text-white cursor-pointer space-y-5'>
                                <a href='http://chatappnew-friends.herokuapp.com/' target='_blank'>
                                    <div className='demo flex justify-center items-center text-xl gap-6'>
                                        <FaExternalLinkAlt />
                                        <p className='underline'>Demo</p>
                                    </div>
                                </a>
                                <a href='https://github.com/Rishabhjain8/Chat-app' target='_blank'>
                                    <div className='code flex justify-center items-center text-xl gap-6 my-5 mdm:my-3'>
                                        <FaCode />
                                        <p className='underline'>Code</p>
                                    </div>
                                </a>
                                
                            </div>
                            <div className='web-feature h-20 border-t-2 border-white w-full'>
                                    <ul className='flex flex-wrap justify-center items-center space-x-4 p-4 text-sm'>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>CSS3</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>React JS</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>Socket.io</li>
                                        <li className='border-2 border-white text-yellow-300 p-2 m-2'>Express JS</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects