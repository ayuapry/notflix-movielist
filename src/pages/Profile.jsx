import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {AiOutlineTwitter, AiOutlineFacebook, AiOutlineGithub} from 'react-icons/ai'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Profile = () => {
  const [token, setToken] = useState(false)

  const user = localStorage.getItem('user');
  const userData = JSON.parse(user);
    console.log(userData)
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
    // <div className='bg-black w-screen h-screen'>
    //   <p>{userData?.displayName}</p>
    //   <button onClick={logout}>Logout</button>
    // </div>
    <div>
      <Navbar />
          <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      {userData?.photoURL ? ( 
                      <img
                        alt="..."
                        src={userData?.photoURL}
                        className="shadow-xl rounded-full h-[200px] w-[200px] align-middle border-none -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "500px" }}
                      />
                      ) : (
                        <img
                        alt="..."
                        src='https://i.pinimg.com/736x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg'
                        className="shadow-xl rounded-full h-[200px] w-[200px] align-middle border-none -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "500px" }}
                      />
                      )}

                    </div>
                  </div>
                  <div className="flex justify-center w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-red-500 active:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        {/* <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Friends</span> 
                        <AiFillTwitterCircle  /> */}
                      <AiOutlineTwitter color='black' size={50} />
                      </div>
                      <div className="mr-4 p-3 text-center">
                        {/* <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Photos</span> */}
                        <AiOutlineFacebook color='black' size={50} />
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        {/* <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span> */}
                        <AiOutlineGithub color='black' size={50} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    {userData?.displayName}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {userData?.email}
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt, soluta placeat rerum illo velit praesentium officia ipsum aperiam! Quod numquam pariatur unde neque, aliquid inventore sunt possimus labore alias.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  )
}
