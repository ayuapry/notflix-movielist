import React,{useEffect} from 'react'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { MovieCard } from '../components/MovieCard'
import { Navbar } from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from "../redux/feature/MovieSlice";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css"
import "swiper/css/pagination"
import { HeadlineCards } from '../components/HeadlineCards'
import { Row } from '../components/Row'
import requests from '../Requests'


export const Homepage = () => {
    const {movies, loading} = useSelector((state) => state.movies);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getMovies())
    },[]);  
  
    if(loading){
      return <h2>Loading</h2>
    }  
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] '>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <div className='bg-white'>
          {/* <Row rowID='1' title='' fetchURL={requests.requestPopular} /> */}
          <Row rowID='2' title='Top Rated Movie' fetchURL={requests.requestTopRated} />
          <Row rowID='3' title='Up Coming Movie' fetchURL={requests.requestUpcoming} />
          {/* <Row rowID='4' title='Adventure Movie' fetchURL={requests.requestAdventure} />
          <Row rowID='5' title='Family Movie' fetchURL={requests.requestFamily} />
          <Row rowID='6' title='Horor Movie' fetchURL={requests.requestHoror} /> */}
        </div>

{/* 
        <div className=' bg-white'>
          <h1 className=' text-black mx-3 pt-10 pb-5 md:px-[10px] lg:ml-[1000px] xl:ml-[120px]'>NOW TRENDING</h1>
          <MovieCard database={movies}    />
        </div>
         */}
        

        <Footer />
    </div>
  )
}
