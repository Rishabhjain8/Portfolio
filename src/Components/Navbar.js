import React, {useEffect, useRef, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import{IoMdClose} from 'react-icons/io';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const ref = useRef();

    const handleClick = () => {
        setClicked(!clicked);
        if(ref.current.classList.contains('mdm:right-[-400px]')){
            ref.current.classList.remove('mdm:right-[-400px]');
            ref.current.classList.add('mdm:right-[0px]');
        }
        else{
            ref.current.classList.add('mdm:right-[-400px]');
            ref.current.classList.remove('mdm:right-[0px]');
        } 
    }

    return (
        <div className='main-navbar flex justify-center items-center space-x-8 mdm:space-x-0 mdm:fixed mdm:bg-[#1e1d1d] mdm:w-[100vw] mdm:p-2  mdm:top-0 mdm:left-0 mdm:justify-start mdm:items-start z-10'>
            <ul ref={ref} className={'flex space-x-10 justify-center items-center cursor-pointer text-white mdm:flex-col mdm:justify-start mdm:items-start mdm:space-y-6 mdm:space-x-0 mdm:fixed mdm:top-10 mdm:right-[-400px] mdm:w-[200px] mdm:h-[100vh] mdm:bg-[#1e1d1d] mdm:shadow-2xl mdm:pt-[40px] mdm:pl-3 mdm:z-10 duration-500 ease-in-out'}>
                <AnchorLink href  = '#home'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-yellow-300 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-yellow-300 active:text-yellow-300'>HOME</li></ AnchorLink>
                <AnchorLink href  = '#about'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-yellow-300 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-yellow-300 active:text-yellow-300'>ABOUT</li></ AnchorLink>
                <AnchorLink href  = '#education'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-yellow-300 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-yellow-300 active:text-yellow-300'>EDUCATION</li></ AnchorLink>
                <AnchorLink href  = '#skills'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-yellow-300 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-yellow-300 active:text-yellow-300'>SKILLS</li></ AnchorLink>
                <AnchorLink href  = '#projects'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-yellow-300 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-yellow-300 active:text-yellow-300'>PROJECTS</li></ AnchorLink>
                <AnchorLink href  = '#experience'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-yellow-300 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-yellow-300 active:text-yellow-300'>EXPERIENCE</li></ AnchorLink>
                <AnchorLink href  = '#contact'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-yellow-300 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-yellow-300 active:text-yellow-300'>CONTACT US</li></ AnchorLink>
            </ul>
            <div className='navbar text-white cursor-pointer hidden mdm:flex mdm:justify-center mdm:items-center mdm:z-[14]' onClick={handleClick}>
                { !clicked ? 
                    <FaBars className='font-bold text-2xl'/> :
                    <IoMdClose className='font-bold text-2xl' />
                }
            </div>
        </div>
    )
}

export default Navbar