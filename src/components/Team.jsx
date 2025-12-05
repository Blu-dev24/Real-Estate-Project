import React from 'react'
import { teams } from '../constant/data'
import Button from './Button'


const Team = () => {
    return (
        <section className="py-[90px] md:py-[150px] bg-[#0F172A]">
            <div className="container">
                <p className=" text-gray-300">Our Team</p>
                <h2 className='text-white'>Meet Our Team</h2>

                <div className='grid gap-16 mt-10 sm:grid-cols-2 lg:grid-cols-4'>
                    {teams.map(member => (
                        <div className="relative" key={member.id}>
                            {/* image */}
                            <div className=''>
                                <img src={member.img} alt={member.name} className='w-full h-full object-cover rounded-xl' />
                            </div>

                            <div className='absolute -bottom-10 border bg-[#FFF4E6] border-[#01296e] p-4 rounded-lg left-1/2 -translate-x-1/2 w-[80%] text-center shadow-lg'>
                                <h4 className='text-lg text-[#01296e]'>{member.name}</h4>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Button label='View More' className="secondary-btn ml-auto block mt-20 rounded-md bg-[#ebe9da] text-[#01296e] " />
            </div>
        </section>
    )
}

export default Team
