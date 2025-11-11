import React from 'react'
import { ServicesCardItem } from '../constant/data'

const Services = () => {
  return (
    <section className="py-[90px] bg-gray-200/30 md:py-[50px]">
        <div className="container">
            <p className="subtitle">
                Services
            </p>
            <h2>Services we offer</h2>

            {/* lists */}
            <ul className="grid gap-6 mt-10 md:mt-16    ">
                {ServicesCardItem.map(item=>(

                    // card
                    <div className="border border-gray-300 p-9 rounded-lg bg-white hover:border-sky-400 transition">
                    <div>
                      <img src={item.icon} alt={item.title} width={70} height={70} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                  

                ))}
            </ul>
        </div>
    </section>
  )
}

export default Services