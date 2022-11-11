import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { searchMovie } from '../redux/feature/SearchSlice'
import { Footer } from './Footer'
import { MovieCard } from './MovieCard'
import { Navbar } from './Navbar'

export const Search = () => {
    const {name} = useParams()
    const {search} = useSelector((state) => state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchMovie(name));
    }, [])

    return (
    <div className='bg-black'>
        <Navbar />
            {search.map((item, i) => (
                <div className=''>
                    <MovieCard key={i} item={item} />
                </div>
            ))}
        <Footer />
    </div>
  )
}
