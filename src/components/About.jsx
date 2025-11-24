import React from 'react'
import { stats } from '../constant/data'
import Button from './Button'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // only trigger once
        threshold:0.3 // starts when 30% of the component is visible
    })
    return (
        <section className='' id='about'>
            <div className="container grid gap-[50px] md:items-center md:grid-cols-2">
                {/* content */}
                <div className="md:order-1">
                    <p className="subtitle">About Us</p>
                    <h2>Who We Are</h2>
                    <p className='mt-4 mb-8'>
                        At Homely, we connect people with homes they love. With over 10 years of industry experience, we provide expert guidance for buyers, sellers, and investors across multiple cities.
                    </p>

                    {/* Stats */}
                    <div className='flex flex-wrap items-center justify-center gap-5 md:gap-10 text-center md:justify-start' ref={ref}>
                        {
                            stats.map(stat => (<div key={stat.id}>
                                <h3 className='text-3xl md:text-4xl font-bold text-sky-600'>{inView && <CountUp end={stat.value} duration={2}/>} + </h3>
                                <p>{stat.label}</p>
                            </div>))
                        }
                    </div>
                    <Button label='Read More' className='secondary-btn mt-8'>Read More</Button>
                </div>
                {/*banner*/}
                <figure>
                    <img src="/images/about-banner.png" alt="about banner" className='w-full h-full object-cover rounded-xl' />
                </figure>
            </div>
        </section>
    )
}

export default About
