import React, { useEffect } from 'react';
import {SiGooglescholar} from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {

    useEffect(() => {
        AOS.init({ duration: 800});
    }, []);

    return (
        <div id = 'education' className='education-heading font-serif p-8 h-auto mdm:p-4 mdm:h-auto bg-violet-200  mdm:pt-12'>
            <div className='about-heading text-center text-3xl mdm:text-2xl font-semibold mb-8 flex items-center justify-center space-x-3 text-violet-500'>
                <SiGooglescholar />
                <h1>Education</h1>
            </div>
            <div className='education-details p-1 flex flex-col justify-center items-center'>
                <div data-aos = "fade-up" data-aos-easing="linear" className='education flex mdm:flex-col mdm:space-y-2 justify-center items-center w-[70%] lgt:w-full p-8 lgt:p-2 border-2 border-violet-500  hover:shadow-2xl m-2 rounded-xl bg-violet-50'>
                    <div className='college-image w-[30%] mdm:w-full mdm:flex mdm:justify-center mdm:items-center'>
                        <img className='h-32 w-48 border-r-4 border-violet-500 pr-10 mdm:border-none mdm:h-24 mdm:w-32 mdm:pr-0' src='https://www.msit.in/static/img/msit.png' alt='logo' />
                    </div>
                    <div className='college-details space-y-1 w-7/12 lgt:w-full lgt:p-2'>
                        <h2 className='text-2xl text-violet-500 mdm:text-lg'>Bachelor of Technology in <span className='text-yellow-500'>Computer Science & Enginnering</span></h2>
                        <h3 className='text-lg mdm:text-base'>Maharaja Surajmal Institute of Technology, New Delhi</h3>
                        <h4 className='mdm:text-sm text-yellow-700'>2020-2024</h4>
                    </div>
                </div>
                <div data-aos = "fade-up" data-aos-easing="linear" className='education flex mdm:flex-col mdm:space-y-2 justify-center items-center w-[70%] lgt:w-full p-8 lgt:p-2 border-2 border-violet-500  hover:shadow-2xl m-2 rounded-xl bg-violet-50'>
                    <div className='college-image w-[30%] mdm:w-full mdm:flex mdm:justify-center mdm:items-center'>
                        <img className='h-32 w-48  border-r-4 border-violet-500 pr-10 mdm:border-none mdm:h-20 mdm:w-36 mdm:pr-0' src='https://c9.shauryasoft.com/media/bny-wlg-2312251233-0747680002-1.png' alt='logo' />
                    </div>
                    <div className='college-details space-y-1 w-7/12 lgt:w-full lgt:p-2'>
                        <h2 className='text-2xl  text-violet-500 mdm:text-lg'>Senior Secondary Education - XII (CBSE)</h2>
                        <h3 className='text-lg mdm:text-base'>Sh. S.N. Sidheshwar Sr. Sec. Public School, Gurgaon</h3>
                        <h4 className='mdm:text-sm text-yellow-700'>2017-2018</h4>
                    </div>
                </div>
                <div data-aos = "fade-up" data-aos-easing="linear" className='education flex mdm:flex-col mdm:space-y-2 justify-center items-center w-[70%] lgt:w-full p-8 lgt:p-2 border-2 border-violet-500  hover:shadow-2xl m-2 rounded-xl bg-violet-50'>
                    <div className='college-image w-[30%] mdm:w-full mdm:flex mdm:justify-center mdm:items-center'>
                        <img className='h-32 w-48 border-r-4 border-violet-500 pr-10 mdm:border-none mdm:h-20 mdm:w-36 mdm:pr-0' src='https://c9.shauryasoft.com/media/bny-wlg-2312251233-0747680002-1.png' alt='logo' />
                    </div>
                    <div className='college-details space-y-1 w-7/12 lgt:w-full lgt:p-2'>
                        <h2 className='text-2xl text-violet-500  mdm:text-lg'>Secondary Education - X (CBSE)</h2>
                        <h3 className='text-lg mdm:text-base'>Sh. S.N. Sidheshwar Sr. Sec. Public School, Gurgaon</h3>
                        <h4 className='mdm:text-sm text-yellow-700'>2015-2016</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education