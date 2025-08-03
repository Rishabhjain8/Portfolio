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
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
            name: 'Boostrap'
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg',
            name: 'Ant Design'
        },
        {
            img: 'https://img.icons8.com/color/48/000000/redux.png',
            name: 'Redux'
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
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
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            name: 'TypeScript'
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            name: 'SQL'
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
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
            name: 'Redux'
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
            name: 'Postman'
        }
    ];

    return (
        <div id = 'skills' className='skills-heading font-serif bg-violet-500 p-8 h-auto mdm:p-4  mdm:pt-12'>
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