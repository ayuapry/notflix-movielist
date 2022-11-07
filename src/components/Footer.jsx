import React from 'react'
import {Link} from 'react-router-dom'
export const Footer = () => {
    return (
    <footer class="p-4 bg-white/10 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to='/hero'>NOTFLIX</Link> . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Licensing</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </footer>
  )
}
