

import React, { useEffect } from 'react'
import bgimage from '../image/bgimage.jpg'  
import Aos from "aos";
import  "aos/dist/aos.css"; 
function Banner() {
    useEffect(() =>{
        Aos.init({ duration: 2000})
      }, []);
    return (
        <div className="relative " style={{backgroundImage: `url(${bgimage})`}} height={600} width={600}>
<main className=" relative overflow-hidden h-screen">
   
    <div className=" flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
            <div className=" h-14 bg-gradient-to-r  flex flex-col">
                <h1 data-aos="zoom-in" className=" font-bold w-full uppercase text-center text-8xl sm:text-5xl  text-black">
                Solid  Fort
                </h1>
                
                <h2 data-aos="zoom-in" className="font-bold max-w-2xl mx-auto w-full text-2xl  text-black-5 text-center text-bold py-8">
                Solid Fort is a company that was founded by a group of friends who seek to bridge the gaps in the  real-estate and construction industry.
                </h2>
                <div className="flex items-center justify-center mt-4">
                    <a href="/services" className="uppercase py-2 px-4 bg-red-800 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900">
                        Services
                    </a>
                    <a href="/products" className="uppercase py-2 px-4 bg-transparent border-2 border-red-800 text-white  hover:bg-gray-800 hover:text-white text-md">
                        Shop
                    </a>
                </div>
            </div>
            <div className="block w-full mx-auto mt-6 md:mt-0 relative">
                
            </div>
        </div>
    </div>
</main>
</div>
    )
}

export default Banner
