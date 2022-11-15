import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCast } from '../redux/feature/DetailsSlice';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

export const Cast = () => {
    const {id} = useParams();
    const {cast} = useSelector((state) => state.cast)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCast(id));
    }, []);

    return (
//     <div>
//     {cast.cast && cast.cast.slice(0, 5).map((cast,index) => (
//     <div key={index} className="flex min-h-screen items-center justify-center bg-neutral-800">
//     <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//       <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
//         <div className="h-96 w-72">
//           <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" ssrc={`https://image.tmdb.org/t/p/original/${cast?.profile_path}`} alt={cast?.name} />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
//         <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
//           <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
//           <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
//           <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
//         </div>
//       </div>
//     <div className="fixed bottom-16">
//       <p className="font-com text-2xl font-semibold text-white">All Images are from <a href="https://unsplash.com" className="text-blue-500">Unsplash.com</a></p>
//     </div>
//   </div>
// </div>
//     ))}
// </div>  
<div className='bg-black'>
        <h1 className='text-white ml-[20px] font-bold text-xl md:ml-20'>Movie Cast and Crew Info</h1>
        <div>
        <Swiper
         slidesPerView={5}
         className="mySwiper"
         style={{margin: '2rem 1rem 2rem 1rem'}}
         >
            <div className='flex'>
            {cast.cast && cast.cast.slice(0,10).map((cast,index) => (
                 <SwiperSlide>
                <div key={index} className='w-[200px] mb-5 md:w-[250px] md:ml-16'> 
                <img className='w-full h-[300px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${cast?.profile_path}`} alt={cast?.name} />
                    <div className='absolute top-0 left-0 md:ml-16 max-md:w-[250px] w-[250px] h-full hover:bg-black/50 opacity-0 hover:opacity-100 text-white '>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{cast?.original_name}<br /> As: {cast?.character}</p>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </div>
            </Swiper>
        </div>
        
    </div>
  )
}
