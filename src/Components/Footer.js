import React from 'react';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
    <div className='footer bg-violet-800 h-auto font-serif p-8 mdm:p-4'>
      <div className='footer-section flex justify-center items-center mdm:flex-col mdm:space-y-4'>
        <div className='first-section text-white w-[45%] space-y-2 mdm:w-full'>
          <h2 className='text-2xl mdm:text-lg text-yellow-500 mdm:text-center'>Rishabh Jain's Portfolio</h2>
          <h4>Thanks for visiting on my portfolio. You can connect with me over socials.</h4>
        </div>
        <div className='second-section text-white w-[45%] space-y-4 mdm:w-full'>
          <h2 className='text-2xl mdm:text-lg text-center text-yellow-500'>Contact Info</h2>
          <div className='social-address'>
            <div className='email flex items-center justify-center space-x-2 text-lg mdm:text-base'>
              <MdEmail className='text-yellow-500' />
              <h2>rishabhjain.rj08@gmail.com</h2>
            </div>
            <div className='address flex items-center justify-center space-x-2 text-lg mdm:text-base'>
              <HiLocationMarker className='text-yellow-500' />
              <h2>Gurgaon, India - 122001</h2>
            </div>
          </div>
          <div className='social-links flex space-x-4 flex-wrap items-center justify-center'>
            <a href = 'https://www.linkedin.com/in/rishabh-jain-rj8' target='_blank'>
            <div className='linkedin border-2 hover:border-white p-2 rounded-full text-black text-xl cursor-pointer bg-white hover:bg-violet-800 duration-200 hover:text-yellow-500'>
              <BsLinkedin />
            </div>
            </a>
            <a href = 'https://github.com/Rishabhjain8' target='_blank'>
            <div className='github border-2 hover:border-white p-2 rounded-full text-black text-xl cursor-pointer bg-white hover:bg-violet-800 duration-200 hover:text-yellow-500'>
              <BsGithub />
            </div>
            </a>
            <a target="_blank" href="mailto:rishabhjain.rj08@gmail.com">
            <div className='email border-2 hover:border-white p-2 rounded-full text-black text-xl cursor-pointer bg-white hover:bg-violet-800 duration-200 hover:text-yellow-500'>
              <MdEmail />
            </div>
            </a>
          </div>
        </div>
      </div>
      
    </div>
    <div className='copyright bg-violet-900 text-white p-2 flex justify-center mdm:text-sm'>
    <h3>&copy; Reserved to <span className='text-yellow-600 font-semibold'>Rishabh Jain</span> | Made with ❤ in India</h3>
  </div>
  </>
  )
}

export default Footer