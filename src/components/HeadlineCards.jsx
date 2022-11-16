import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../redux/feature/MovieSlice';
import {AiFillStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { getGenre } from '../redux/feature/MovieSlice'


export const HeadlineCards = ({item}) => {
    const {movies, loading} = useSelector((state) => state.movies);
    const {genre} = useSelector((state) => state.genre);
    const [select, setSelect] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getMovies())
        dispatch(getGenre())
    },[]);  

    if(loading){
        return <h2>Loading</h2>
    }  
    const res   = movies[Math.floor(Math.random() * movies.length)]
    const res1  = movies[Math.floor(Math.random() * movies.length)]
    const res2  = movies[Math.floor(Math.random() * movies.length)]

    const truncateString = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
    };

    return (
    <div>
    <div className='bg-white'>
        <div className='flex items-center justify-between text-black '>
            <h1 className='bg-white pt-5 ml-12 text-black font-bold text-xl md:ml-12 xl:ml-12 xl:pt-5 '>Popular Movies</h1>
            <div className="filter-dropdowns mr-12 pt-5">
                    <div className="relative inline-block text-left">
                        <div>
                            <button 
                                type="button" 
                                className="inline-flex w-44 md:w-56 justify-between rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-black shadow-sm  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
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
                            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black 
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
                </div>
        </div>
    </div>
    <div className='bg-white max-w-[1640px] mx-auto px-[50px] p-4 py-12 grid md:grid-cols-3 gap-6 mx-100 '>
        {/* card */}
        <div className='rounded-xl relative cursor-pointer' onClick={() => navigate(`/details/${res.id}`)}>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold px-2 pt-4'>{truncateString(res?.title,20)}</p>
                <p className='flex items-center px-2'><AiFillStar color='yellow' className='mr-1' />{res?.vote_average}/10</p>
                <div className='mt-10 md:mt-[30px] lg:mt-[70px]'>
                    <a href={`https://www.youtube.com/results?search_query=${res?.original_title}`} className='px-8 py-3 mt-[60px] ml-2 bg-white/20 border-none rounded-lg hover:bg-white/50 hover:text-white xl:mt-[50px]'>Watch Trailer</a>
                </div>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl '
            src={`https://image.tmdb.org/t/p/original/${res?.backdrop_path}`} alt="/" />
        </div>

        <div className='rounded-xl relative cursor-pointer' onClick={() => navigate(`/details/${res?.id}`)}>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold px-2 pt-4'>{truncateString(res1?.title,20)}</p>
                <p className='flex items-center px-2'><AiFillStar color='yellow' className='mr-1' />{res1?.vote_average}/10</p>
                <div className='mt-10 md:mt-[30px] lg:mt-[70px]'>
                    <a href={`https://www.youtube.com/results?search_query=${res1?.original_title}`} className='px-8 py-3 mt-[60px] ml-2 bg-white/20 border-none rounded-lg hover:bg-white/50 hover:text-white xl:mt-[50px]'>Watch Trailer</a>
                </div>            
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl '
            src={`https://image.tmdb.org/t/p/original/${res1?.backdrop_path}`} alt="/" />
        </div>

        <div className='rounded-xl relative cursor-pointer' onClick={() => navigate(`/details/${res?.id}`)}>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold px-2 pt-4'>{truncateString(res2?.title,20)}</p>
                <p className='flex items-center px-2'><AiFillStar color='yellow' className='mr-1' />{res2?.vote_average}/10</p>
                <div className='mt-10 md:mt-[30px] lg:mt-[70px]'>
                    <a href={`https://www.youtube.com/results?search_query=${res2?.original_title}`} className='px-8 py-3 mt-[60px] ml-2 bg-white/20 border-none rounded-lg hover:bg-white/50 hover:text-white xl:mt-[50px]'>Watch Trailer</a>
                </div>            
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl '
            src={`https://image.tmdb.org/t/p/original/${res2?.backdrop_path}`} alt="/" />
        </div>
    </div>
    </div>
  )
}
