import React from 'react'
import Navbar from '../../components/Navbar'
import FallingSquares from '../../components/FallingSquares'
import "../../styles/Hero.css"
import "../../styles/button.css"

const Hero = () => {
    return (
        <div className='min-h-[100vh] flex flex-col justify-center align-center items-center bg-gradient-to-b from-transparent to-green-200 text-black'>
            <div className='bg-grid min-h-[100vh]'></div>
            <Navbar />
            <div className='flex gap-6 flex-col align-center justify-center items-center h-[85vh] w-full'>
                <div className='text-[1em] bg-black text-white px-6 py-2 rounded-full'>
                    👋 Let's Save our Environment
                </div>
                <div className=' md:flex md:flex-col items-center md:text-[3em] text-[1em] font-bold'>
                    Streamline Your Sustainability <span className='block'> Reporting With CARBON CRUNCH</span>
                </div>
                <p className='text-[1em] -mt-5'>
                    <span className='text-green-600'>95%</span> Accurate Carbon Calculations Trusted by Industry Leaders
                </p>
                <div className='flex mt-10 gap-8 font-bold text-[1.2em]'>
                    <button className='btn rounded-md shadow-sm shadow-orange-500'>Free Calculator</button>
                    <button className='btn rounded-md shadow-sm shadow-green-500'>Book Demo</button>
                </div>
            </div>
            <FallingSquares />
        </div>
    )
}

export default Hero