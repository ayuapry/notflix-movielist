import {configureStore} from '@reduxjs/toolkit'
import AllMovieSlice from './feature/MovieSlice'
import SearchSlice from './feature/SearchSlice'

export default configureStore ({
    reducer: {
        movies: AllMovieSlice,
        details: AllMovieSlice,
        reviews: AllMovieSlice,
        search: SearchSlice,
    }
})