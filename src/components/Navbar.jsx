import React, { useState, useEffect } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getGenre } from '../redux/feature/MovieSlice'
export const Navbar = () => {
    const [search, setSearch]= useState('');
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [token, setToken] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate();

    const user = localStorage.getItem('user');
    const userData = JSON.parse(user);
  
    useEffect(() =>{
      if(userData){
        setToken(true)
      }
    },[token])

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

    const onSubmit = () => {
        navigate(`/search/${search}`)
    }

    const {genre} = useSelector((state) => state.genre);
    const dispatch = useDispatch();
    const [select, setSelect] = useState('')
  
    useEffect(() => {
      dispatch(getGenre())
    },[]);  

    return (
    <header className={`${isScrolled && 'bg-[#221F1F]'}`}>
    <div className='w-screen h-[80px] z-10 text-white font-light drop-shadow-lg '>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Link to='/' className='text-3xl font-bold ml-4 sm:text-4xl text-[#E50914] cursor-pointer '>NOTFLIX</Link>  
                <ul className='hidden md:flex'>
                    {/* <li>Popular</li>
                    <li>Tv Shows</li> */}
                    {/* <Link className='flex items-center' to='/genrepage'>Genres</Link> */}
                </ul>
            </div>
            
            <form onSubmit={onSubmit} className="relative mx-auto w-max mr-2">
                    <input 
                        type="text"
                        name='search'
                        onChange={(e => setSearch(e.target.value))}
                        placeholder='search movie' 
                        className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full bg-black/20 pl-12 outline-none focus:w-full focus:cursor-text focus:border-red-300 focus:pl-16 focus:pr-4" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black-500 px-3.5 peer-focus:border-red-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
            </form>
            {(token) ? 
            <div className='hidden md:flex pr-4'>
                {/* <p>{userData?.displayName}</p> */}
                <Link to='/profile' className='flex items-center mx-5'><FaUserAlt size={20} /></Link>
                {/* <button className='border-none bg-transparent text-white mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button> */}
            </div>
            : 
            <div className='hidden md:flex pr-4'>
                <Link to='/login' className='flex items-center mx-5'><FaUserAlt size={20} /></Link>
                {/* <button className='border-none bg-transparent text-white mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button> */}
            </div>
            }
            <div className='md:hidden mr-4 cursor-pointer' onClick={handleClick}>
                {!nav ? <AiOutlineMenu size={30} className='cursor-pointer' /> : <AiOutlineClose  size={40} className='w-5 cursor-pointer ' />}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 text-black pb-10'}>
            <li className='border-b-2 border-red-300 w-full'>Popular</li>
            <li className='border-b-2 border-red-300 w-full'>Tv Shows</li>
            {/* <div className="filter-dropdowns mb-10">
                    <div className="relative inline-block text-left">
                        <div>
                            <button 
                                type="button" 
                                className="inline-flex w-[325px] md:w-56 justify-between rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-light text-black shadow-sm  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
                                id="menu-button" 
                                aria-expanded="true" 
                                aria-haspopup="true"
                                onClick={() => setSelect(!select)}
                            >
                                All Genres
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>
                        <div 
                            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[white] shadow-lg ring-1 ring-black 
                            ring-opacity-5 focus:outline-none transition ease-out duration-100 ${select ? 'visible transform opacity-100 scale-100' : 'invisible transform opacity-0 scale-95'}`}
                            role="menu" 
                            aria-orientation="vertical" 
                            aria-labelledby="menu-button" 
                            tabIndex="-1"
                        >
                            <div className="py-1" role="none">
                                {
                                    genre && genre.map((item, index) => (
                                        <a href={`/Genres/${item.name}`} className="block px-4 py-2 text-sm" key={index} role="menuitem" tabIndex="-1" id="menu-item-0">
                                            {item.name}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> */}
            {(token) ? 
                    <li className='border-b-2 border-red-300 w-full'><Link to='/profile'>Profile</Link></li>
            :
            <div className='flex flex-rows gap-3 justify-end my-4'>
                <Link to='/login' className='bg-transparent border-2 border-red-600 text-black rounded-lg hover:bg-[#E50914] font-semibold text-center px-8 py-3 mb-4'>Sign In</Link>
                <Link to='/register' className='bg-[#E50914] border-red-600 text-white font-bold rounded-lg hover:bg-[#ff8080] text-center text-white-600 px-8 py-3 mb-4'>Sign Up</Link>
            </div>
            }
        </ul>
    </div>
        </header>
  )
}
