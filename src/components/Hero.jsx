import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from "../redux/feature/MovieSlice";
import { Link } from "react-router-dom";

export const Hero = () => {
  const {movies, loading} = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [token, setToken] = useState(false)

  const user = localStorage.getItem('user');
  const userData = JSON.parse(user);

  useEffect(() =>{
    if(userData){
      setToken(true)
    }
  },[token])
  
  useEffect(() => {
    dispatch(getMovies())
  },[]); 

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
};

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
            {(token) ? 
              <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold mb-5'>{res?.title}</h1>
                <p className='w-full md:max-w-[60%] lg:max-w-[60%] xl:max-w-[65%] text-gray-200 lg:text-2xl md:text-xl '>
                    {truncateString(res?.overview, 150)}
                </p>
                <div className="mt-10">
                    <a href={`https://www.youtube.com/results?search_query=${res?.original_title}`} className='px-8 py-3 mt-[60px] ml-0 bg-white/20 border-none rounded-lg hover:bg-white/50 hover:text-white xl:mt-[50px]'>Watch Trailer</a>
                </div>
              </div>
              : 
              <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold mb-5'>Welcome to Notflix</h1>
                <p className='w-full md:max-w-[60%] lg:max-w-[60%] xl:max-w-[65%] text-gray-200 lg:text-2xl md:text-xl '>
                    Enjoy exclusive Notflix Originals as well as popular movies and TV shows for IDR 59,000 79,000/month. Watch now, cancel anytime.
                </p>
                <div className="mt-10">
                <Link to ='/register' className='px-8 py-3 bg-[#E50914]  border-none rounded-lg hover:bg-white/50 hover:text-white'>Sign Up Now</Link>
                </div>
              </div>
            }
        </div>
    </div>
  )
}
