import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useDispatch, useSelector } from 'react-redux'
import { getGenre } from '../redux/feature/MovieSlice'

export const GenrePages = () => {
    const {genre} = useSelector((state) => state.genre);
    const dispatch = useDispatch();
    const navigate  = useNavigate();
  
    useEffect(() => {
      dispatch(getGenre())
    },[]);  

    return (
    <div className='bg-black w-full h-full'>
        <h1 className='text-white'>GenrePages</h1>
        <div className='mb-20'>
        <p className='text-black font-bold md:text-xl ml-16'>Browse By Category</p>
        <Swiper
         slidesPerView={6}
         className="mySwiper"
         style={{margin: '4rem 0rem 0rem 4rem'}}
         >
        <div className='flex'>
        {genre.map((item) => (
          <SwiperSlide>
            
            <Link to={`/genre/${item.name}`} className='relative'>
              <button className='text-red-500 hover:bg-red-400 px-12 py-2 bg-transparent rounded-full border-2 border-red-500'>{item.name}</button>
            </Link>
          </SwiperSlide>
        ))}
        </div>
        </Swiper>
        </div>
    </div>
  )
}
