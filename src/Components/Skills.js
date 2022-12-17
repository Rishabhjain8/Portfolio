import React from 'react';
import {FaLaptopCode} from 'react-icons/fa';

const Skills = () => {
    const skills = [
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
            name: 'React JS'
        },
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
            name: 'Express JS'
        },
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
            name: 'Node JS'
        },
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
            name: 'MongoDB'
        },
        {
            img: 'https://camo.githubusercontent.com/97eae2c66014dda7c6c06aa8e7bc970a0fe5a89646cb04d9e72c8ac6c35d9f40/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f626f6f7473747261702e706e67',
            name: 'Boostrap'
        },
        {
            img: 'https://img.icons8.com/color/48/000000/redux.png',
            name: 'Redux'
        },
        {
            img: 'https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667',
            name: 'GIT'
        },
        {
            img: 'https://img.icons8.com/color/48/000000/tailwindcss.png',
            name: 'Tailwind CSS'
        },
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
            name: 'HTML'
        },
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
            name: 'CSS'
        },
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
            name: 'JavaScript'
        },
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg',
            name: 'Java'
        },
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
            name: 'C++'
        },
        {
            img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
            name: 'C'
        },
        {
            img: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png',
            name: 'Netlify'
        },
        {
            img: 'https://img.icons8.com/color/48/000000/heroku.png',
            name: 'Heroku'
        }
    ];

    return (
        <div id = 'skills' className='skills-heading font-serif bg-violet-500 p-8 h-auto mdm:p-4 lg:h-[100vh]  mdm:pt-12'>
            <div className='about-heading text-center text-3xl mdm:text-2xl font-semibold mb-8 text-yellow-300 flex items-center justify-center space-x-3'>
                <FaLaptopCode />
                <h1>Skills</h1>
            </div>
            <div className='skills flex flex-wrap justify-center items-center gap-3 mdm:gap-1'>
                {
                    skills.map((skill, i) => (
                        <div className='skill flex flex-col justify-center items-center bg-violet-900 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl' key={i}>
                            <img className='h-14 w-14' src={skill.img} alt='logo' />
                            <h4 className='text-white mt-2'>{skill.name}</h4>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Skills