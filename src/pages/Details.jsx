import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../redux/feature/MovieSlice';
import { Navbar } from '../components/Navbar';
import {AiFillStar} from 'react-icons/ai'
import { Footer } from '../components/Footer';
import { Cast } from '../components/Cast';
import { Review } from '../components/Review';

export const Details = () => {
  const {id} = useParams()
  const {details} = useSelector((state) => state.details)
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(id))
    }, []);


  return (
    <div>
        <Navbar />
        <div className='w-screen h-screen grid grid-rows-2 md:grid-cols-2 bg-black'>
          <div className='flex justify-center items-center w-full h-full bg-black md:h-screen md:grid-rows-2'>
            <div>
              <img 
                className='w-[350px] h-full mt-10 rounded-xl md:h-[700px] lg:h-[600px] lg:w-[600px] object-cover  '
                src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`} alt="" />
            </div>
          </div>

          <div className='w-full h-screen bg-black text-white md:h-screen'>
            <div className='mx-5 md:mt-[170px] lg:mt-[90px] '>
              <p className='text-center font-bold text-2xl' >{details?.title || details?.original_title}</p>
              <p className='pt-3 font-semibold'>Original Title : {details?.original_title}</p>
              <p className='pt-3 font-thin'>overview:<br />{details?.overview}</p>
              <p className='flex jus items-center pt-5'><AiFillStar color='yellow' />&nbsp; {parseFloat(details?.vote_average).toFixed(1)}/10</p>
              <p className='pt-3' >Production Companies: </p>
              {
                        details.production_companies && details.production_companies.slice(0, 5).map((proc, i) => (
                        <span key={i}  className='font-light'>{proc.name}, </span>
                        ))
                    }
              <p className='pt-3' >Genres: </p>
              {
                        details.genres && details.genres.slice(0, 5).map((genre, i) => (
                        <span key={i} className='font-light'>{genre.name}, </span>
                        ))
                    }
              <p className='pt-3 font-light text-yellow-100'>{details?.release_date}, {details?.runtime}min, Tagline: {details?.tagline} </p>
              <div className='pt-10'>
                <a href={`https://www.youtube.com/results?search_query=${details?.original_title}`} className='px-8 py-3 pt-3 mt-[60px] bg-white/20 border-none rounded-lg hover:bg-white/50 hover:text-white xl:mt-[50px]'>Watch Trailer</a>
              </div>
              <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
          </div>
        </div>
        <Review />
        <Cast />
        <Footer />
    </div>
  )
}
