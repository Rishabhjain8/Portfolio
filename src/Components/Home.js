import React from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div id = 'home' className='main p-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-auto font-serif'>
            <Navbar />
            <div className='name h-full flex flex-col space-y-6 justify-center items-center text-white'>
                <img className='border-2 border-transparent rounded-full hover:p-6 h-60 w-60 hover:shadow-2xl' src = 'https://cdni.iconscout.com/illustration/premium/thumb/male-programmer-working-on-laptop-4375019-3640109.png' alt = 'laptop' />
                <h2 className='text-5xl mdm:text-2xl'>Hello, I'm</h2>
                <h1 className='text-6xl font-semibold mdm:text-3xl'>Rishabh Jain</h1>
                <h2 className='text-3xl mdm:text-xl text-yellow-300'><Typewriter options={{ strings: ['MERN Developer 💻', 'Problem Solver 📖'], autoStart: true, loop: true, delay: 80 }} /></h2>
            </div>
        </div>
    )
}

export default Home