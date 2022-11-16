import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const [token, setToken] = useState(false)

  const user = localStorage.getItem('user');
    const userData = JSON.parse(user);
  
    useEffect(() =>{
      if(userData){
        setToken(true)
      }
    },[token])

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
      <p>{userData?.displayName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
