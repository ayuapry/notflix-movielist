// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     movie: [],
//     movies:[],
//     loading: false,
// };

// export const getMovie = createAsyncThunk ("homepage/getMovie", async () => {
//     try{
//         const res = await axios.get(
//         `https://api.themoviedb.org/3/movie/popular?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US&page=4`
//         );
//         return res.data
//     }
//     catch (error){
//         console.log(error)
//     }
// })

// export const getMovies = createAsyncThunk ("homepage/getMovies", async () => {
//     try{
//         const res = await axios.get(
//         `https://api.themoviedb.org/3/movie/popular?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US&page=4`
//         );
//         return res.data
//     }
//     catch (error){
//         console.log(error)
//     }
// })

// const AllMovieSlice = createSlice (({
//     name: "movies",
//     initialState,
//     reducers: {},
//     extraReducers: {
//         // [getMovie.pending]: (state) => {
//         //     state.loading = true
//         // },
//         [getMovie.fulfilled]: (state, action) =>{
//             state.loading = false;
//             state.movie = action.payload;
//         },
//         [getMovies.fulfilled]: (state, { payload }) => {
//             state.movies = payload
//         }
//         // [getMovie.rejected]: (state) =>{
//         //     state.loading = false;
//         // }
//     }
// }))
// export default AllMovieSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getMovies = createAsyncThunk(
    'movies/getmovies',
    async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US&page=4`)
            return res.data.results
        } catch (err) {
            console.log(err)
        }
    }
)

export const getGenre = createAsyncThunk ("movies/getGenre", async () => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US`
        );
        return res.data.genres
    }
    catch (error){
        console.log(error)
    }
})

export const getGenreMovies = createAsyncThunk ("movies/getGenreMovies", async (id) => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=244fa9aef597e28aa246abfdef2d39f6&query=${id}`
        );
        // console.log(res.data.results)
        return res.data.results
    }
    catch (error){
        console.log(error)
    }
})

export const getDetails = createAsyncThunk ("movies/getDetails", async (id = false) => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=244fa9aef597e28aa246abfdef2d39f6`
        );
        return res.data
    }
    catch (error){
        console.log(error)
    }
})

export const getReviews = createAsyncThunk ("movies/getReviews", async (id) => {
    try{
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=244fa9aef597e28aa246abfdef2d39f6`
        );
        return res.data.results
    }
    catch (error){
        console.log(error)
    }
})

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        genre: [],
        movies: [],
        details: [],
        reviews: [],
        genreMovies: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [getMovies.fulfilled]: (state, { payload }) => {
            state.movies = payload
        },
        [getGenre.fulfilled]: (state, { payload }) => {
            state.genre = payload
        },
        [getDetails.fulfilled]: (state, { payload }) => {
            state.details = payload
        },
        [getReviews.fulfilled]: (state, { payload }) => {
            state.reviews = payload
        },
        [getGenreMovies.fulfilled]: (state, { payload }) => {
            state.genreMovies = payload
        },
    }
}
)
export default movieSlice.reducer