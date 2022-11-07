import {configureStore} from '@reduxjs/toolkit'
import AllMovieSlice from './feature/MovieSlice'

export default configureStore ({
    reducer: {
        movies: AllMovieSlice,
    }
})