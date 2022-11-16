import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../redux/feature/MovieSlice';
import {AiFillStar} from 'react-icons/ai'


export const Review = () => {
    const {id} = useParams()
    const {reviews} = useSelector((state) => state.reviews)
    const dispatch = useDispatch()

    useEffect(() => {
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
    <div className='bg-black pt-[400px] pb-0 md:pt-0'>
        <p className='font-bold text-center text-xl mb-5'>What People Says ?</p>
        {
          reviews && reviews.slice(0,2).map((review, i) => (
        <div className='bg-black pb-5 '> 
          <article key={i} className='border-2 px-10 mx-[20px] border-white bg-white rounded-xl md:mx-[80px]'>
              <div className="flex items-center mb-4 space-x-4 mt-5">
                {review?.author_details.avatar_path ? ( 
                  <img className="w-10 h-10 rounded-full text-black" src={`https://image.tmdb.org/t/p/original/${review?.author_details.avatar_path}`} alt="noima" />
                ) : (
                    <img className="w-10 h-10 rounded-full" src='https://th.bing.com/th/id/R.9d32bec8058bd3595a63a08a8cc12ade?rik=9cCTin36GLU%2f5w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_87237.png&ehk=hVpH%2bC7rwlA1j2KqxGpMs1sp9l0RgM0jjRJsJsvDoPc%3d&risl=&pid=ImgRaw&r=0' alt="" />
                )}
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
  )
}
