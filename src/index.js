import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Details } from './pages/Details';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Search } from './components/Search';
import { GenrePage } from './pages/GenrePage';
import { Genre } from './components/Genre';
import { Profile } from './pages/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/hero' element={<Hero />} />
    <Route path='/details/:id' element={<Details />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/search/:name' element={<Search />} />
    <Route path='/genrepage' element={<GenrePage />} />
    <Route path='/Genres/:id' element={<Genre />} />
    <Route path='/profile' element={<Profile />} />
  </Routes>
  </BrowserRouter>
  </Provider>
);
