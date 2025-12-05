import React from 'react'

const Button = ({ label, className }) => (
  <button className={className}>{label}</button>
)

const Hero = () => {
    return (
        <section className='pt-10 bg-[url(/images/hero-banner.png)] bg-cover bg-no-repeat bg-fixed bg-[center_70%] sm:bg-[center_60%] md:bg-[center_80%] lg:bg-[center_10%] min-h-screen lg:min-h-[860px] flex items-center' id='home' >
            <div className="container mx-auto px-4 text-gray-50">
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[64px]'>Find the <br /> Property That <br /> Feels Like Home.</h1>
                {/* <p className="text-gray-200 max-w-[440px] pt-4 pb-8">From cozy apartments to spacious family homes, we'll help you find the one that fits your lifestyle.</p> */}
                <Button label='Search Property' className="px-8 py-4 mt-8 rounded-full text-white font-semibold bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-105" />
            </div>
        </section>
    )
}

export default Hero