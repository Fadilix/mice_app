import React, { useState } from 'react'

const Hamburger = () => {

    const [isClicked, setIsClicked] = useState(false);
    const handleHamburgerClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div className='flex flex-col space-y-10 items-center'>

            <div className={`hamburger md:hidden transition absolute duration-300 flex flex-col space-y-2 items-center ${isClicked ? 'active' : ''}`} onClick={handleHamburgerClick}>
                <div className={`one bg-white h-[5px] w-[50px] ${isClicked ? 'click-ham' : ''}`}></div>
                <div className={`two bg-white h-[5px] w-[50px] ${isClicked ? 'click-ham' : ''}`}></div>
                <div className={`three bg-white h-[5px] w-[50px] ${isClicked ? 'click-ham' : ''}`}></div>
            </div>

            <div>
                {isClicked && (
                    <nav className='absolute bg-gray-600 right-4 rounded-xl p-4 md:hidden block'>
                        <ul className='flex flex-col '>
                            <li><a href="#" className='hover:text-red-500'>Home</a></li>
                            <li><a href="#mice" className='hover:text-red-500'>Mice</a></li>
                            <li><a href="#" className='hover:text-red-500'>Gaming</a></li>
                            <li><a href="#" className='hover:text-red-500'>About us</a></li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    )
}

export default Hamburger;