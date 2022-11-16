import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { useDispatch } from 'react-redux';
import GoogleButton from 'react-google-button';
import {signInWithGoogle, auth, logInWithEmailAndPassword,} from '../redux/feature/AuthSlice'

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "", 
    password: ""
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logInWithEmailAndPassword(formValues));
    navigate('/')
  };

  const googleLogin = () => {
    dispatch(signInWithGoogle());  
  };

  return (
<div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://i.pinimg.com/564x/46/8f/a0/468fa0fd8dadf62e8999a51a3f269ed1.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        {/* <Navbar /> */}
        <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            {/* {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null} */}
            <form 
            onSubmit={handleSubmit} 
            className='w-full flex flex-col py-4'>
              <input
                onChange={handleChange}
                value={formValues.email}
                className='p-3 my-2 bg-gray-700 rouded'
                type='email'
                name='email'
                placeholder='Email Address'
                autoComplete='email'
              />
              <input
                value={formValues.password}
                onChange={handleChange}
                className='p-3 my-2 bg-gray-700 rouded'
                type='password'
                name='password'
                placeholder='Password'
                autoComplete='current-password'
              />
              <button className=' py-3 my-6 rounded font-bold' onClick={handleSubmit}>
                Sign In
              </button>
              {/* <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div> */}
              <p className='py-8'>
                <span className='text-gray-600'>New to Netflix?</span>{' '}
                <Link to='/register'>Register Now!</Link>
                <GoogleButton onClick={googleLogin} />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>  
    )
}
