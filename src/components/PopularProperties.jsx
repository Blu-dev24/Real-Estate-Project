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
        <section className="section pb-[90px] md:pb-[150px]" id='properties'>
            <div className="container">
                {/* Title wrapper */}
                <div className="flex justify-center items-center lg:justify-between lg:items-center">

                    <div className="text-center max-w-[600px] mx-auto">
                        <h2>Popular Properties</h2>
                        <p className="max-w-[500px] mt-4 mb-7 mx-auto">
                            Lorem ipsum dolor sit amet consectetur. Faucibus tristique auctor mauris velit varius. Eu duis viverra.
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
                                    <img src={item.imgURL} alt={item.name} className='w-full h-full object-cover' />
                                </div>

                                {/* Card Content */}
                                <div className="">
                                    <b className=''>{item.price}</b>
                                    <a href="#" className=''>{item.name}</a>
                                    <p>{item.location}</p>

                                    <div className="">
                                        <p>{item.bed}</p>
                                        <p>{item.bath}</p>
                                        <p>{item.area}</p>
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
