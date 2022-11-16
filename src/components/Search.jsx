import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { searchMovie } from '../redux/feature/SearchSlice'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Search = () => {
    const {name} = useParams()
    const {search} = useSelector((state) => state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchMovie(name));
    }, [])
    const navigate = useNavigate()

    return (
    <div>
            <Navbar  />
            <div className='bg-white w-screen bg-gradient-to-b from-black to-white pt-5 px-1 md:px-5 lg:px-10 xl:px-1 '>
            { search && search.map((item) => (
                <div className='w-[160px] md:w-[200px] xl:w-[220px] inline-block cursor-pointer relative p-0 mt-20 ml-5' onClick={() => navigate(`/details/${item.id}`)}> 
                {item?.poster_path !== null ? (
            <div>
            <img className='w-full h-[250px] md:h-[300px] xl:h-[320px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt={item?.title} />
                <div className='absolute rounded-md top-0 left-0 w-full h-full hover:bg-white/50 opacity-0 hover:opacity-100 text-black '>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}<br />{(item.vote_average).toFixed(1)}/10</p>
                </div>
            </div>
            ) : ( 
                <div>
                <img className='w-full h-[250px] md:h-[300px] xl:h-[320px] object-cover block rounded-md' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' alt={item?.title} />
                    <div className='absolute rounded-md top-0 left-0 w-full h-full hover:bg-white/50 opacity-0 hover:opacity-100 text-black '>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}<br />{(item.vote_average).toFixed(1)}/10</p>
                    </div>
                </div>
            )}
            </div>
            ))}
            </div>
            <Footer />
    </div>

  )
}
