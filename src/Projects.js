import React, { useEffect } from 'react'
import project from './image/project.jpg'
import Aos from "aos";
function Projects() {
    useEffect(() =>{
        Aos.init({ duration: 2000})
      }, []);
    return (
        <div className="relative " style={{backgroundImage: `url(${project})`}} height={600} width={600}>
<main className=" relative overflow-hidden h-screen">
   
    <div className=" flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
            <div className=" h-14 bg-gradient-to-r  flex flex-col">
                <h1 data-aos="zoom-in" className=" font-bold w-full uppercase text-center text-8xl sm:text-5xl  text-white">
                Projects
                </h1>
                
                <h2 data-aos="zoom-in" className="font-bold max-w-2xl mx-auto w-full text-xl  text-white text-center text-bold py-8">
                We do not aim to meet our clients’ expectations; we strive to exceed them, completing every job to the highest possible standard. We have included a small selection of our work here so you can see the quality for yourself.
                </h2>
                
            </div>
            <div className="block w-full mx-auto mt-6 md:mt-0 relative">
                
            </div>
        </div>
    </div>
</main>
<div class="h-screen flex items-center justify-center bg-white ">

  <div class="grid grid-cols-12 px-18 gap-5 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 flex-auto">

    <div class="col-span-12">
        <p class="text-red-800 text-3xl font-semibold">Our Latest Projects</p>
    </div>

    
    <a class="col-span-3 bg-rose-700 rounded-xl h-52 md:h-80" href="/">

        
        <img src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320"alt=" "  class="rounded-t-xl max-h-44" />

        
        <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Bandung </p>

        
        <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10"> 117 kilometers away </p>

    </a>

    
    <a class="col-span-3 bg-red-500 rounded-xl h-52 md:h-80" href="/">

        
        <img src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=320" alt=" " class="rounded-t-xl max-h-44" />

        
        <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Lembang </p>

        
        <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10"> 109 kilometers away </p>

    </a>

    
    <a class="col-span-3 bg-pink-700 rounded-xl h-52 md:h-80" href="/">

        
        <img src="https://a0.muscache.com/im/pictures/ffde0c4b-1889-4d11-bb00-41411d34fdfc.jpg?im_w=320" alt=" " class="rounded-t-xl max-h-44" />

        
        <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Semarang </p>

        
        <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10"> 406 kilometers away </p>

    </a>

    
    <a class="col-span-3 bg-rose-600 rounded-xl h-52 md:h-80" href="/">

        
        <img src="https://a0.muscache.com/im/pictures/03bb6d0a-5ccb-47e1-83fc-b7ad87e7f8c3.jpg?im_w=320" alt=" " class="rounded-t-xl max-h-44" />

        
        <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Serang </p>

        
        <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10"> 78 kilometers away </p>

    </a>

  </div> 

</div>
</div>
    )
}

export default Projects
