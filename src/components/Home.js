import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import m2 from "../assets/m2.png";
import m6 from "../assets/m6.png";
import m7 from "../assets/m7.png";
import ImgCard from './ImgCard';
import m1 from "../assets/m1.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import m5 from "../assets/m5.png"
import m9 from "../assets/m9.png"
import headset from "../assets/headset.png"
import keybrd from "../assets/keybrd.png"
import ryzen from "../assets/ryzen.png"
import nvidia from "../assets/nvidia.png"
import CustomCarousel from './CustomCarousel';
import Pros from './Pros';
import ninja from "../assets/ninja.png"
import clix from "../assets/clix.png"



const Home = () => {

    const pros = [ninja, clix];
    const gamingCarousel = [headset, keybrd, ryzen, nvidia];
    const images = [m2, m6, m7];
    const imgcards = [m3, m4, m2, m9];

    return (
        <div>
            <div className='xl:flex items-center justify-center mt-[40px]'>
                <div>
                    <h1 className='md:text-8xl text-5xl'>Mouse - Steelseries Sensei 310</h1>
                    <div className='flex space-x-2 text-2xl'>
                        <p className='line-through'>$199,</p>
                        <p>$100,-</p>
                    </div>
                </div>
                <Carousel className='' showIndicators={false} showThumbs={false}>
                    {images.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`Image ${index}`} className='md:h-[600px] md:w-[600px] z-[1]' style={{ "background-color": "black" }} />
                            <p className=""></p>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="flex items-center justify-between">
                <div className='flex items-center space-x-4 '>
                    <a href="#" className='flex items-center space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='border border-white rounded-[50%] p-4 text-white cursor-pointer' width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        <h4>Add to cart</h4>
                    </a>
                </div>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className height="50" width="40" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </a>
                <div className='flex space-x-4 items-center'>
                    <p>1</p>
                    <div className='h-[5px] bg-gray-600 w-[90px]'></div>
                    <p>4</p>
                </div>

            </div>


            {/* mice */}
            <div id='mice' className="md:grid grid-cols-2 md:gap-4 mt-[100px] mb-[100px] md:space-x-0 space-y-4">
                {imgcards.map((image, index) => (
                    <div key={index} className='flex mt-[16px]'>
                        <ImgCard img={image} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>


            {/* Gaming carousel */}
            <div className='mt-[60px] mb-[100px]'>
                <h1 className='text-center text-3xl font-bold'>Featured Gears</h1>
                <div className='mt-[40px]'>

                    <CustomCarousel img={gamingCarousel} className="" />
                </div>
            </div>


            {/* pros tips */}
            <div className="md:flex md:space-x-4 space-y-4 md:space-y-0 mt-[100px] mb-[200px]">
                {pros.map((img, index) => (
                    <div key={index}>
                        <Pros img={img} />
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Home;