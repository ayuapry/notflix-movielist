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
export const searchMovie = createAsyncThunk(
    'search/searchMovie',
    async (query) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=39d534102975349064b234a5f47263bb&language=en-US&page=1&include_adult=false&query=${query}`)
            return res.data.results
        } catch (err) {
            console.log(err)
        }
    }
)

export const getGenre = createAsyncThunk(
    'genres/getGenre',
    async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US&page=4`)
            return res.data.genres
        } catch (err) {
            console.log(err)
        }
    }
)

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

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        genre: [],
        movies: [],
        search: [],
        details: [],
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
        [searchMovie.fulfilled]: (state, { payload }) => {
            state.search = payload
        },
        [getDetails.fulfilled]: (state, { payload }) => {
            state.details = payload
        }
    }
}
)
export default movieSlice.reducer