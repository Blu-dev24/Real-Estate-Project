import React from 'react'
import { testimonialItems } from '../constant/data'
import { RiArrowLeftSLine, RiArrowRightSLine, RiStarFill } from '@remixicon/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Testimonials = () => {
    return (
        <section className='py-[90px] md:pd-[150px] bg-natural-200/60'>
            <div className='container'>
                <p className="subtitle">Testimonials</p>
                <h2>What our clients say</h2>

                {/* card wrapper*/}
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    className="mt-10 md:mt-12"
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{ 768: { slidesPerView: 2 } }}
                >
                    {testimonialItems.map(item => (
                        // card swiper slide
                        <SwiperSlide className="bg-whtie p-6 rounded-xl mb-16" key={item.id}>
                            <div>
                                <div className="flex text-yellow-500 gap-1 items-center text-xl">
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                </div>
                                <p className='mt-2 mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo numquam consequatur natus architecto laudantium sapiente ab laboriosam sed eligendi!</p>
                                <div className='flex items-center gap-4'>
                                    <img src={item.img} alt={item.name} width={40} height={40} className='rounded-full aspect-square' />
                                    <div>
                                        <h4 className='font-semibold text-lg'>{item.name}</h4>
                                        <p>{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center mt-12 gap-6">
                    <button><RiArrowLeftSLine /></button>
                    <button><RiArrowRightSLine /></button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
