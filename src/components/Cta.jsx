import React, { useState } from 'react'
import ReactPlayer from 'react-player'
const Cta = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <section className="">
            <div className="container">
                <div>
                    <video
                        src="/images/Cta-video.mp4"
                        width={"100%"}
                        height={"100%"} 
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>

                    {/* Play/Pause Button */}

                {/* <button className=''>
                    {isPlaying ? <RiPauseFill }
                </button> */}

                </div>


            </div>
        </section>
    )
}

export default Cta
