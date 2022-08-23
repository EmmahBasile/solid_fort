import React, { useState } from 'react'
import logo from '../image/logo.png';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
//import {Transition} from '@headlessui/react
function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>


      <div className=' flex mt-1 h-18 bg-red-800'>
          <div className='flex-1 mt-2 mb-2 ml-5 '>
          <MailIcon className="text-white mr-1"/><strong className='text-white mr-1'>services@solid-fort.com</strong>
          <PhoneEnabledIcon className="text-white ml-2"/><strong className='text-white mr-1'>+237 65776655444</strong>
          </div>
      
          <div className='ml-auto  mt-2 mb-2 mr-5 sm:flex-col'>
          <a href='https://www.facebook.com/search/top/?q=solid%20fort'><FacebookIcon className="text-white ml-1 mr-1"/></a>
          <a href='https://solid-fort.vercel.app/'><InstagramIcon className="text-white ml-1 mr-1"/></a>
          <a href='https://solid-fort.vercel.app/'><LinkedInIcon className="text-white ml-1 mr-1"/></a>
          <a href='/login'><strong className="text-white">LOGIN</strong><AccountCircleIcon className='text-white ml-1 mr-1'/></a>
          
          </div>
          
      </div>
      <header className=" bg gray bg-white sticky top-0 h-20 sm:h-32 flex items-center shadow-md z-30 w-full ">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className=" ml-10 uppercase  text-white  font-black text-3xl">
            <a href='/'><img src={logo} height={100} width={100} alt='' /></a>
          </div>

          <div className="flex items-center lg:ml-40 sm:ml-30 mr-1 w-full ">
            <nav className={`${active ? '' : 'hidden'}  ml-40 font-sen text-red-900 bg-white uppercase text-lg lg:flex items-right w-full z-20 `}>
              <a href="/" className="py-2 px-10 flex  text-red-800 font-medium hover:text-white hover:bg-red-800 hover:rounded-md">
                Home
              </a>
              <a href="/projects" className="py-2 px-4 flex text-red-800 font-medium hover:text-white hover:bg-red-800 hover:rounded-md">
                Projects
              </a>
              <a href="/services" className="py-2 px-4 flex text-red-800 font-medium hover:text-white hover:bg-red-800 hover:rounded-md">
                Our Services
              </a>
              <a href="/products" className="py-2 px-4 flex text-red-800 font-medium hover:text-white hover:bg-red-800 hover:rounded-md">
                Product
              </a>
              <a href="/contact" className="py-2 px-4 flex text-red-800 font-medium hover:text-white hover:bg-red-800 hover:rounded-md">
                Contact
              </a>
              <a href="/about" className="py-2 px-4 flex text-red-800 font-medium hover:text-white hover:bg-red-800 hover:rounded-md">
                About Us
              </a>
              <a href="/about" className="py-2 px-0 flex text-red-800 font-medium hover:text-white hover:bg-red-800 hover:rounded-md">
              <ShoppingCartRoundedIcon/>
              </a>
            </nav>
            <button
              className=' inline-flex p-3  rounded lg:hidden text-red-800 font-medium  ml-auto hover:text-black outline-none '
              onClick={handleClick}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
        {/*<Transition 
           show={!active}
           enter="transition ease-out duration-100 transform"
           enterFrom="opaity0 sccale-95"
           enterTo="opacity-100 scale-100"
           leave="transition ease-in duration75 transform"
           leaveFrom="opacity-100 scale-100"
           leaveTo="opacity-0 scale-95"
        >
            {(ref)=>(
                <div className="md:hidden id:mobile-menue">

                </div>
            )}
       
            </Transition>*/}
      </header>

    </>
  )
}

export default Header
