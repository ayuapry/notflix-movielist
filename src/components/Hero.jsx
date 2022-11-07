import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from "../redux/feature/MovieSlice";

export const Hero = () => {
  const {movies, loading} = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies())
  },[]);  

  if(loading){
    return <h2>Loading</h2>
  }  
  const res  = movies[Math.floor(Math.random() * movies.length)]
  return (
    <div className='w-full h-[600px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black/80'></div>
            <img
                className='w-full h-full object-cover'
                src={`https://image.tmdb.org/t/p/original/${res?.backdrop_path}`}
                alt={res?.title}
            />
            <div className='absolute w-full top-[30%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold mb-5'>Welcome to Notflix</h1>
                <p className='w-full md:max-w-[60%] lg:max-w-[60%] xl:max-w-[65%] text-gray-200 lg:text-2xl md:text-xl '>
                    Enjoy exclusive Notflix Originals as well as popular movies and TV shows for IDR 59,000 79,000/month. Watch now, cancel anytime.
                </p>
                <div className="mt-10">
                <a href={`https://www.youtube.com/results?search_query=${res?.original_title}`} className='px-8 py-3 bg-white/20 border-none rounded-lg hover:bg-white/50 hover:text-white'>Watch Trailer</a>
                </div>
                
            </div>
        </div>
    </div>
  )
}
