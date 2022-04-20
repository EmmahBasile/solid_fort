import React, { useEffect } from 'react'
import Team from './components/Team';
import Banner from './components/Banner';
import image1 from './image/image1.png';
import image0 from './image/image0.png';
import pics1 from './image/pics1.png';
import StoreIcon from '@material-ui/icons/Store';
import BusinessIcon from '@material-ui/icons/Business';
import Aos from "aos";
import  "aos/dist/aos.css";
function Home() {
  useEffect(() =>{
    Aos.init({ duration: 2000})
  }, []);
    return (
        <>
            
             <Banner/>
             <div className='lg:grid-cols xl:grid-cols-4 sm:grid-cols-1 justify-center items-center text-center  '>
                 <section className="container mx-auto px-6 p-10">
        <div data-aos="fade-right" className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-red-800 font-medium mb-3">About Us </h4>
          <p className="text-black mb-8 ">Solid Fort is a company that was founded by a group of friends who seek to bridge the gaps in the real-estate and construction industry. Solid Fort as a company, brings all the resources needed for you to own, rent or sell a property at a very affordable rate. Solid Fort also aims at improving providing in its service as client needs are growing. </p>
          <p className="text-black mb-8 ">Our <stron className="font-bold">Mission</stron> is to provide the best services through experience,Relationships built on integrity,Success built on performance and Fueled by a commitment of continual improvement, both personally and professionally.
</p>       <p className="text-black mb-8">Our <stron className="font-bold">Vission</stron> is to be sought out as the recognized and trusted firm in the respective domain of service; to have the best output in development and in service; and to drive continues improvement internally and externally for the growth of the community and the industry. </p>
          <a href='/about'><strong className='text-red-800'>See More</strong></a>
        </div>
        <div data-aos="fade-left" className="w-full md:w-1/2">
          <img src={pics1} height={600} width={600} alt=''/>
        </div>
      </div>
      <div data-aos="fade-up" className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-red-800 font-bold mb-3">Achitecture</h4>
          <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
          <a href='/achitecture'><strong className='text-red-800'>See More</strong></a>
        </div>
        <div className="w-full md:w-1/2">
          <img src={pics1} height={600} width={600} alt=''/>
        </div>
      </div>

      <div data-aos="fade-up" className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <img src={image1} height={600} width={600} alt='' />
        </div>
        <div className="w-full md:w-1/2 pl-10">
        <h4 className="text-3xl text-red-800 font-bold mb-3">Real Estate</h4>
          <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
          <a href='/realestate'><strong className='text-red-800'>See More</strong></a>
        </div>
      </div>

      <div data-aos="fade-up" className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-red-800 font-bold mb-3">Engineering & Construction</h4>
          <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
          <a href='/engineeringandconstruction'><strong className='text-red-800'>See More</strong></a>
        </div>
        <div className="w-full md:w-1/2">
          <img src={image0} height={600} width={600} alt='' />
        </div>
      </div>
      <div data-aos="fade-up" className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
        <img src={image0} height={600} width={600} alt='' /> 
        </div>
        <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-red-800 font-bold mb-3">General Supplies</h4>
          <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
          <a href='/generalsupplies'><strong className='text-red-800'>See More</strong></a> 
        </div>
      </div>
    </section>
                 <section class="py-20 bg-red-800 my-20">
                     
    <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2  gap-10   items-center max-w-6xl mx-auto">
      <div className="px-4 md:mr-6">
        <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-white">
          With our diverse range of lenders, we fight hard to get you the best deal.
        </h3>
        <p className="mt-4 text-white text-xl font-medium">
          With our diverse range of lenders, we fight hard to get you the best deal.
        </p>
      </div>
      <div>
        <div className="absolute bg-red-800 transform -translate-x-10  h-64">
        </div>
        <div className="transform md:rounded-md  bg-white rotate-6 scale-100 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12  space-y-2">
          <div className="px-4 sm:px-0 grid grid-cols-5 sm:grid-cols-4 gap-2 sm:gap-8 max-w-5xl mx-auto">
                        
                      </div>
        </div>
      </div>
    </div>
  </section>
            </div>
            <div data-aos="fade-up" className='pt-20 bg-gray-100'>
                <div className="mb-16 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-800  sm:text-4xl">
            A better way to live
        </p>
    </div>
<div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg ">

        <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-800 text-white">
                <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">
        Engineering & Construction 
        </h3>
        <p className="text-md  text-gray-500  py-4">
            Encompassing today's website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-red-800 shadow-lg rounded-lg ">
        <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-20 w-20 rounded-md bg-white text-red-800">
                <BusinessIcon/>
            </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-white font-semibold  py-4">
        Real Estate 
        </h3>
        <p className="text-md text-whie  py-4">
            Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
        </p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg ">
        <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-800 text-white">
            <StoreIcon/>
            </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">
        General Supplies 
        </h3>
        <p className="text-md  text-gray-500  py-4">
            Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
        </p>
    </div>
</div>

</div>
         

            <Team/>
            
      
        </>
    )
}

export default Home
