import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = ({setToken, token, userData}) => {
    const navigate = useNavigate()
    const logout = async () => {
        localStorage.clear();
        navigate('/')
        setTimeout(function () {
            window.location.reload(1);
          }, 1500);
      };

  return (
    <div className='bg-black w-screen h-screen'>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
