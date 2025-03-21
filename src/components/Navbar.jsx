import React from 'react'
import { StarBorder } from './ui/star-border'

const Navbar = () => {
    return (
        <nav className='text-[1.1em] w-full h-[15vh] items-center bg-transparent flex justify-around align-center'>
            <div className='font-bold text-[1.3em]'>
                <img src="" alt="" />
                <span>Carboncrunch</span>
            </div>
            <div className='hidden ml-16 md:flex md:gap-6 md:px-10 md:py-4 bg-white md:font-normal'>
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">Blog</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className='flex gap-2 font-semibold text-[0.8em]'>
                <StarBorder color="black">Login</StarBorder>
                <StarBorder>Book Demo</StarBorder>
            </div>
        </nav>
    )
}

export default Navbar