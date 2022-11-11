import React,{useEffect} from 'react'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { MovieCard } from '../components/MovieCard'
import { Navbar } from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { getGenre, getMovies } from "../redux/feature/MovieSlice";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css"
import "swiper/css/pagination"
import { HeadlineCards } from '../components/HeadlineCards'
import { Row } from '../components/Row'
import requests from '../Requests'
import { Link } from 'react-router-dom'


export const Homepage = () => {
    const {movies, loading} = useSelector((state) => state.movies);
    const {genre} = useSelector((state) => state.genre);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getMovies())
      dispatch(getGenre())
    },[]);  
  
    if(loading){
      return <h2>Loading</h2>
    }  
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] '>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <div className='bg-white '>
          <Row rowID='2' title='Top Rated Movie' fetchURL={requests.requestTopRated} />
          <Row rowID='3' title='Up Coming Movie' fetchURL={requests.requestUpcoming} />
        </div>
        {/* <div>
        <p className='text-black font-bold md:text-xl ml-16'>Browse By Category</p>
        <Swiper
         slidesPerView={6}
         className="mySwiper"
         style={{margin: '4rem 0rem 0rem 4rem'}}
         >
        <div className='flex'>
        {genre.map((item) => (
          <SwiperSlide>
            <Link to={`/Genres/${item.name}`} className='relative'>
              <button className='text-red-500 hover:bg-red-400 px-12 py-2 bg-transparent rounded-full border-2 border-red-500'>{item.name}</button>
            </Link>
          </SwiperSlide>
        ))}
        </div>
        </Swiper>
        </div> */}

        {/* 
        <div className=' bg-white'>
          <h1 className=' text-black mx-3 pt-10 pb-5 md:px-[10px] lg:ml-[1000px] xl:ml-[120px]'>NOW TRENDING</h1>
          <MovieCard database={movies}    />
        </div>
         */}
         <div>
          
         </div>
         
        <Footer />
    </div>
  )
}
