import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Movie } from './Movie'
import {MdChevronLeft, MdChevronRight } from 'react-icons/md'

export const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([])

    useEffect (() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    },[fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    

  return (
    <div>
        <div className='mr-10 ml-10'>
        <h2 className='text-black font-bold md:text-xl p-4'>{title}</h2>
        <div className="relative flex items-center group ">
            <MdChevronLeft color='black' onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40}/>
            <div id={'slider' + rowID } className='w-full h-[400px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' >
                {movies.map((item,index) => (
                    <Movie key={index} item={item} />
                ))}
            </div>
            <MdChevronRight color='black' onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40}/>
        </div>    
        </div>
    </div>
  )

}
