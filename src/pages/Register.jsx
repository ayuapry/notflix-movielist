import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import { Navbar } from '../components/Navbar'
import { useDispatch } from 'react-redux';
import { useAuthState } from "react-firebase-hooks/auth";
import {registerWithEmailAndPassword, auth} from '../redux/feature/AuthSlice'


export const Register = () => {
  // const [user, setUser] = useState([]);
  const initialValues =  {
    name: '',
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = e => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
  }
  // const [userss] = useAuthState(auth);

  // const token = JSON.parse(localStorage.getItem('token'))
  // const users = JSON.parse(localStorage.getItem("user"));

  // useEffect(() => {
  //    setToken(token);
  //    setUser(users);
  // }, [userss, token]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formValues)
      dispatch(registerWithEmailAndPassword(formValues));
    };
  return (
    <div>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
        {/* <Navbar /> */}
          <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                 <input
                  name='name'
                  value={formValues.name}
                  onChange={handleChange}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='name'
                  placeholder='Full Name'
                />
                <input
                 name='email'
                 value={formValues.email}
                 onChange={handleChange}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  name='password'
                  value={formValues.password}
                  onChange={handleChange}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button onClick={handleSubmit} className='py-3 my-6 rounded font-bold'>
                  Sign Up
                </button>
                {/* <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div> */}
                <p className='py-1'>
                  <span className='text-gray-600'>
                    Already subscribed to Notflix?
                  </span>{' '}
                  <Link to='/login'>Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
