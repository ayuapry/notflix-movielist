import {configureStore} from '@reduxjs/toolkit'
import AllMovieSlice from './feature/MovieSlice'
import SearchSlice from './feature/SearchSlice'
import DetailsSlice from './feature/DetailsSlice'

export default configureStore ({
    reducer: {
        movies: AllMovieSlice,
        details: AllMovieSlice,
        reviews: AllMovieSlice,
        search: SearchSlice,
        genre: AllMovieSlice,
        genreMovies: AllMovieSlice,
        cast: DetailsSlice,
    }
})