import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getGenreMovies } from '../redux/feature/MovieSlice';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Genre = () => {
    const {id} = useParams()
    const {genreMovies} = useSelector((state) => state.genreMovies)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getGenreMovies(id))
    }, []);
    return (
        <div>
            <Navbar  />
            <div className='bg-white w-screen bg-gradient-to-b from-black to-white pt-5 md:px-10 lg:px-16 xl:px-12 '>
            { genreMovies && genreMovies.map((item) => (
            <div className='w-[160px] md:w-[210px] xl:w-[260px] inline-block cursor-pointer relative p-0 mt-20 ml-5' onClick={() => navigate(`/details/${item.id}`)}> 
            <img className='w-full h-[350px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt={item?.title} />
                <div className='absolute rounded-md top-0 left-0 w-full h-full hover:bg-white/50 opacity-0 hover:opacity-100 text-black '>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}<br />{(item.vote_average).toFixed(1)}/10</p>
                </div>
            </div>
            ))}
            <Footer />
            </div>
        </div>
  )
}
