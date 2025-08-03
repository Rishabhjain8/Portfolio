import React, { useEffect } from 'react';
import {FaUserAlt} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const About = () => {

    useEffect(() => {
        AOS.init({duration: 1500})
    }, [])

    return (
        <div id="about" className='p-8 mdm:p-4 font-serif flex flex-col h-auto bg-violet-200 mdm:pt-12'>
            <div className='about-heading text-center text-3xl mdm:text-2xl font-semibold mb-8 flex items-center justify-center space-x-3'>
                <FaUserAlt />
                <h1>About <span className='text-violet-500'>Me</span></h1>
            </div>
            <div className='flex justify-center items-center h-full flex-wrap gap-8'>
                <div className='image w-[45%] mdm:w-full flex justify-center items-center'>
                    <img className='border border-transparent shadow-xl rounded-full w-80 h-80 mdm:h-72 ' src='https://avatars.githubusercontent.com/u/47451276?v=4' alt='Profile Image' />
                </div>
                <div className='personal-info flex flex-col w-1/2 mdm:w-full gap-4 mdm:justify-center mdm:items-center'>
                    <div className='name flex flex-col font-semibold'>
                        <h2 className=' text-xl mdm:text-lg'>I'm Rishabh Jain</h2>
                        <h2 className=' text-xl mdm:text-lg'>MERN Developer</h2>
                    </div>
                    <h3 className=' text-lg mdm:text-base'>I am a <span className='text-violet-500'>Full-Stack(MERN) developer</span> based in Gurgaon, India. I am currently enrolled in <span className='text-violet-500'>Computer Science & Engineering from Maharaja Surajmal Institute of Technology, New Delhi</span>. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills.</h3>
                    {/* <button className='p-2 bg-violet-600 text-white w-36 rounded-lg hover:bg-violet-900 hover:shadow-lg'>Resume</button> */}
                </div>
            </div>
            <AnchorLink href = '#home'>
            <div data-aos = "fade-down" className='top fixed right-4 bottom-4 border-2 bg-yellow-500 pt-2 w-12 h-12 mdm:w-8 mdm:h-8 mdm:pt-1 flex justify-center rounded-full hover:scale-110 cursor-pointer z-[8]'>
                <h4 className='text-3xl text-violet-900 font-bold mdm:text-xl'>^</h4>
            </div>
            </AnchorLink>
        </div>
    )
}

export default About