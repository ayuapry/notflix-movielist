import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getDetails, getReviews } from '../redux/feature/MovieSlice';
import { Navbar } from '../components/Navbar';
import {AiFillStar} from 'react-icons/ai'
import { Footer } from '../components/Footer';

export const Details = () => {
  const {id} = useParams()
  const {details} = useSelector((state) => state.details)
  const {reviews} = useSelector((state) => state.reviews)
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(id))
        dispatch(getReviews(id))
    }, []);

    const truncateString = (str, num) => {
      if (str?.length > num) {
        return str.slice(0, num) + '...';
      } else {
        return str;
      }
  };

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
        <div className='bg-black pt-[400px] pb-0 md:pt-0'>
        <p className='font-bold text-center text-xl mb-5'>What People Says ?</p>
        {
          reviews && reviews.slice(0,2).map((review) => (
        <div className='bg-black pb-5 '> 
          <article className='border-2 px-10 mx-[20px] border-white bg-white rounded-xl md:mx-[80px]'>
              <div className="flex items-center mb-4 space-x-4 mt-5">
                  <img className="w-10 h-10 rounded-full" src={`https://image.tmdb.org/t/p/original/${review?.author_details.avatar_path}`} alt="" />
                  <div className="space-y-1 font-medium dark:text-white">
                      <p className="block text-sm text-gray-500 dark:text-gray-400">{review?.author}</p>
                  </div>
              </div>
              <div className="flex items-center mb-1">
                  <AiFillStar color='orange' />
                  <AiFillStar color='orange' />
                  <AiFillStar color='orange' />
                  <AiFillStar color='orange' />
                  <AiFillStar color='orange' />
                  <p className='text-gray-500'>&nbsp; {review?.author_details.rating}/10</p>
              </div>
              <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>created at: {review?.created_at}</p></footer>
              <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{truncateString(review?.content, 400)}</p>
              <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
          </article>
        </div>
        ))}
        </div>
        <Footer />
    </div>
  )
}
