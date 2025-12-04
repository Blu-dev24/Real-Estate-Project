import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react'
import React from 'react'
import { cardItems } from '../constant/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Swiper Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PopularProperties = () => {
    return (
        <section className="section pb-[90px] md:pb-[150px] bg-gradient-to-br from-[#002057] to-[#F5F3EF]
" id='properties'>
            <div className="container">
                {/* Title wrapper */}
                <div className="flex justify-center items-center lg:justify-between lg:items-center">

                    <div className="text-center max-w-[600px] mx-auto">
                        <h2 className='text-[34px] sm:text-[42px] lg:text-[50px] font-medium tracking-wider text-[#00163D]'>Premium Properties</h2>
                        <p className="max-w-[500px] mt-4 mb-7 mx-auto text-white">
                            Discover handpicked properties that combine modern living, prime locations, and unmatched value.
                        </p>
                    </div>

                </div>

                {/* Card Wrapper */}
                <Swiper modules={[Navigation, Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={true}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn'
                    }}

                    spaceBetween={30}
                    breakpoints={{
                        575: { slidesPerView: 2, },
                        993: { slidesPerView: 3 }
                    }}
                    className="">
                    {cardItems.map(item => (
                        <SwiperSlide className='' key={item.id}>
                            {/* Card */}
                            <div className="">
                                {/* Card Image */}
                                <div className="">
                                    <img src={item.imgURL} alt={item.name} className='w-full h-full object-cover rounded-xl' />
                                </div>

                                {/* Card Content */}
                                <div className="">
                                    <div className='flex justify-between'>
                                        <a href="#" className='text-[18px] text-black'> {item.name}</a>
                                        <b className='text-[20px]'>{item.price}</b>
                                    </div>

                                    <p className='text-black' >{item.location}</p>

                                    <div className="grid grid-cols-3 pb-20 mt-5">
                                        <p className='text-black'>{item.bed}</p>
                                        <p className='text-black'>{item.bath}</p>
                                        <p className='text-black'>{item.area}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default PopularProperties
