import React, { useState, useEffect } from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    // const handelClose = () => setNav(!nav)

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
              setIsScrolled(true)
            } else {
              setIsScrolled(false)
            }
          }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, )

    return (
    <header className={`${isScrolled && 'bg-[#383838]'}`}>
    <div className='w-screen h-[80px] z-10 text-white font-light drop-shadow-lg '>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Link to='/' className='text-3xl font-bold ml-4 sm:text-4xl text-green-600 cursor-pointer '>NOTFLIX</Link>  
                <ul className='hidden md:flex'>
                    <li>Popular</li>
                    <li>Tv Shows</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <form className="relative mx-auto w-max mr-2">
                    <input type="search" placeholder='search movie' className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full  bg-white/20 pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </form>
                <div className='flex items-center mx-5'><FaUserAlt size={20} /></div>
                
                {/* <button className='border-none bg-transparent text-white mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button> */}
            </div>
            <div className='md:hidden mr-4 cursor-pointer' onClick={handleClick}>
                {!nav ? <AiOutlineMenu size={30} className='cursor-pointer' /> : <AiOutlineClose  size={40} className='w-5 cursor-pointer ' />}
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-500 w-full px-8'}>
            <li className='border-b-2 border-green-300 w-full'>Home</li>
            <li className='border-b-2 border-green-300 w-full'>Popular</li>
            <li className='border-b-2 border-green-300 w-full'>Tv Shows</li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-white-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
        </header>
  )
}
