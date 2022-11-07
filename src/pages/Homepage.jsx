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
        {/* <div className=' '>
          <div className=''>
            <Swiper
                slidesPerView={1}
                className="mySwiper"
                // autoplay={{
                // delay: 2500,
                // disableOnInteraction: false
                // }}
                // modules={[Autoplay, Pagination, Navigation]}
                style={{margin: '1rem 3rem 4rem 4rem'}}
                >
                {movies && movies.map(item => (
                    <SwiperSlide>
                        <MovieCard database={movies} key={item.id} item={item} />
                    </SwiperSlide>
                ))}  
            </Swiper>
          </div>
        </div> */}
                  <MovieCard database={movies}   />

        <Footer />
    </div>
  )
}
