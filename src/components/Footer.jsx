import React from 'react'
import {Link} from 'react-router-dom'
export const Footer = () => {
    return (
    <footer className="p-4 bg-white md:flex md:items-center md:justify-between ">
        <span className="text-sm text-gray-600 sm:text-center ">© 2022 <Link to='/hero'>NOTFLIX</Link> . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-600 sm:mt-0">
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Licensing</li>
            <li>Contact</li>
        </ul>
    </footer>
  )
}
