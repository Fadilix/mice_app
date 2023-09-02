import React, { useState } from 'react'
import Hamburger from './Hamburger';

const Navbar = () => {

    const [isClicked, setIsClicked] = useState(false);
    const handleHamburgerClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-evenly'>
                <p className='border rounded-[50%] mr-40 p-2 '>GG</p>


                    <nav className='hidden md:flex'>
                        <ul className='flex space-x-4'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Mice</a></li>
                            <li><a href="#">Gaming</a></li>
                            <li><a href="#">About us</a></li>
                        </ul>
                    </nav>
            </div>
            <Hamburger onClick={handleHamburgerClick} />

            <div className='md:flex space-x-4 items-center hidden'>
                <div className='flex space-x-4 items-center cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <p>Fadile</p>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar;