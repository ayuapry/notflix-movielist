import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../redux/feature/MovieSlice';
import { Navbar } from '../components/Navbar';

export const Details = () => {
  const {id} = useParams()
  const {details} = useSelector((state) => state.details)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(id))
    }, []);

  return (
    <div>
        <Navbar />
        <div className='w-screen h-screen grid grid-rows-2 md:grid-cols-2'>
          <div className='flex justify-center items-center w-full h-full bg-green-200 md:h-screen'>
            <div>
              <img                 src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`} alt="" />
            </div>
          </div>

          <div className='w-full h-full bg-white text-black md:h-screen'>
            <p>page 2</p>
          </div>

        </div>
    </div>
  )
}
