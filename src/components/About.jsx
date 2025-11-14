import React from 'react'
import { stats } from '../constant/data'

const About = () => {
    return (
        <section className=''>
            <div className="container">
                {/* content */}
                <div className="">
                    <p className="subtitle">About Us</p>
                    <h2>Who We Are</h2>
                    <p className=''>
                        At Homely, we connect people with homes they love. With over 10 years of industry experience, we provide expert guidance for buyers, sellers, and investors across multiple cities.
                    </p>

                    {/* Stats */}
                    <div className=''>
                        {
                            stats.map(stat => (<div key={stat.id}>
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>))
                        }
                    </div>
                    <button label='Read More' className='secondary-btn mt-8'></button>
                </div>
                {/*banner*/}
                <figure>
                    <img src="/images/about-banner.png" alt="about banner" className='w-full h-full object-cover' />
                </figure>
            </div>
        </section>
    )
}

export default About
