import React from 'react'

const ImgCard = ({img}) => {
    return (
            <div className="flex bg-gray-700 pl-[10px]">
                <div className="flex flex-col justify-around">
                    <div>
                        <p>someting</p>
                        <h4 className='text-purple-600 text-3xl'>$29,-</h4>
                    </div>
                    <h1 className="md:text-6xl text-3xl absolute text-gray-800">Mouse</h1>
                    <div className='flex flex-col space-y-4 items-start '>
                        <h3 className='text-3xl font-bold z-[1]'>Mice</h3>
                        <div className='flex space-x-4 items-center'>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className='' width="40" height="40" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg></a>
                            <a href="#"><p className='text-xl'>Browse</p></a>
                        </div>
                    </div>  
                </div>
                <img src={img} className="z-[0]" alt="" />

            </div>
    )
}

export default ImgCard