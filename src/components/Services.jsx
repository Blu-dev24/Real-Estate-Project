import React from 'react'
import { ServicesCardItem } from '../constant/data'

const Services = () => {
  return (
    <section className="py-[90px] bg-linear-to-b from-gray-300 to-blue-900 md:py-[50px] text-center">
      <div className="container">
        <h1 className="subtitle text-4xl"
        data-aos='fade-up'
        data-aos-delay={150}>
          Services - What We Offer
        </h1>

        {/* lists */}
        <ul className="grid gap-6 mt-10 md:mt-16 sm:grid-cols-2 xs:grid-cols-2 lg:grid-cols-4">
          {ServicesCardItem.map((item, index) => (
            
            // card
            <div 
                className="border border-gray-300 p-9 rounded-lg bg-white hover:border-[#01296e] transition" 
                key={item.id}
                data-aos='fade-up'
                data-aos-delay={150} 
                >
              <div className='bg-sky-200/30 max-w-max p-5 rounded-full font-bold my-3'>
                <img src={item.icon} alt={item.title} width={70} height={70} />
              </div>
              <h4 className='text-[22px] text-[#01296e]'>{item.title}</h4>
              <p>{item.text}</p>
            </div>


          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services