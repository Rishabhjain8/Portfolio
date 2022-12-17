import React, {useEffect} from 'react';
import {RiSuitcaseFill} from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {

    useEffect(() => {
        AOS.init({ duration: 1500});
    }, []);

    return (
        <div id = 'experience' className='experience-heading font-serif p-8 h-auto mdm:p-4 mdm:h-auto bg-violet-200  mdm:pt-12'>
            <div className='about-heading text-center text-3xl mdm:text-2xl font-semibold mb-8 flex justify-center items-center space-x-3 text-violet-500'>
                <RiSuitcaseFill />
                <h1 className=''>Experience</h1>
            </div>
            <div data-aos = "fade-down" className = 'experience-details flex mdm:flex-col mdm:space-y-2 justify-center items-center w-[70%] mdm:w-full m-auto bg-violet-300 mdm:bg-violet-200 p-2 rounded-xl shadow-xl hover:scale-110 hover:shadow-2xl mb-8'>
                <div className='company-image w-1/4 mdm:w-full mdm:flex mdm:justify-center'>
                    <img src = 'https://www.thesisacewriters.com/images/thesisacewriters.png' alt = 'company-logo' />
                </div>
                <div className='company-details w-2/3 mdm:w-full'>
                    <div className='company-name flex flex-col space-y-2 mx-2'>
                        <h1 className='text-2xl mdm:text-xl font-semibold text-yellow-600'>Thesis Ace Writers</h1>
                        <h2 className='text-violet-800 text-lg mdm:text-base'>Software Development Intern</h2>
                        <div className='comapny-duration flex justify-between items-center'>
                            <h2 className='text-gray-500'>August 2022 - September 2022</h2>
                            <h2 className='italic text-gray-500 mdm:hidden'>2 Months</h2>
                        </div>
                        <div className='work-details flex flex-col justify-center items-start space-y-2 mdm:text-sm mdm:p-1'>
                            <h3>He has worked as a <span className='text-yellow-600'>Front-end engineer</span> whose work is to develop a whole front-end of the website which includes <span className='text-yellow-600'>creating login, registeration, verification and many more pages</span>. </h3>
                            <ul className='list-disc'>
                                <li>Developing a website using <span className='text-yellow-600'>React JS</span></li>
                                <li><span className='text-yellow-600'>Integrating and testing</span> of APIs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience