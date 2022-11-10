import React from 'react'
import { useNavigate } from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai'

export const MovieCard = ({item}) => {
  const navigate = useNavigate();
  return (
    // <div className='bg-white'>
    <div className="mx-auto max-w-xl py-1 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-5">
    <div className="mt-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {/* {database && database.map(item => ( */}
        <div key={item.id} className="group relative" onClick={() => navigate(`/details/${item.id}`)}>
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80" >
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt={item?.title}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={item.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {item.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{item.release_date}</p>
            </div>
            <p className="flex items-center text-sm font-medium text-gray-900"><AiFillStar color='yellow' className='mr-1' />{item.vote_average}/10</p>
          </div>
        </div>
      {/* ))} */}
    </div>
  </div>
  // </div>
  )
}
