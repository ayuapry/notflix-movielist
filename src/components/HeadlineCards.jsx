import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../redux/feature/MovieSlice';
import {AiFillStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export const HeadlineCards = ({item}) => {
    const {movies, loading} = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getMovies())
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
    <h1 className='bg-white pt-5 ml-12 text-black font-bold text-xl md:ml-12 xl:ml-12 xl:pt-5 '>Popular Movies</h1>
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
