import React from 'react'
import contacts from './image/contacts.png';

function About() {
    return (
        <div>
            
           
<div className="container mx-auto mt-15 mb-20">
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="max-h-96 md:h-screen">
        <img className="w-screen h-screen object-cover object-top" src={contacts} height={600} width={600} alt=""/>
      </div>
      <div className="flex bg-gray-100 p-10">
        <div className="mb-20 mt-20 max-w-lg">
          <h1 className="text-3xl uppercase">Solid Ford</h1>
          <p className="font-semibold mb-5">Construction Company</p>
          <p>Solid Fort is a company that was founded by a group of friends who seek to bridge the gaps in the real-estate and construction industry. Solid Fort as a company, brings all the resources needed for you to own, rent or sell a property at a very affordable rate. Solid Fort also aims at improving providing in its service as client needs are growing. </p>
          <h5>Mission</h5>
          <p>To provide the best services through experience:
                Relationships built on integrity
                Success built on performance 
                Fueled by a commitment of continual improvement, both personally and professionally.
            </p>
            <h5>Vission</h5>

             <p>To be sought out as the recognized and trusted firm in the respective domain of service; to have the best output in development and in service; and to drive continues improvement internally and externally for the growth of the community and the industry. 

</p>
          <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">Write us</button>
        </div>
      </div>
    </div>
  </div>
      
        </div>
    )
}

export default About
