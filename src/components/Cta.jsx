import { RiPauseFill, RiPlayFill } from '@remixicon/react';
import React, { useRef, useState, useEffect } from 'react';

const Cta = () => {
    const [isPlaying, setIsPlaying] = useState(true); // video starts playing
    const [isMobile, setIsMobile] = useState(false);

    const playerRef = useRef(null);

    useEffect(() => {
        // Detect mobile view
        setIsMobile(window.innerWidth < 768);
    }, []);

    const handlePlayPause = () => {
        if (!playerRef.current) return;

        if (isPlaying) {
            playerRef.current.pause();
        } else {
            playerRef.current.play();
        }

        setIsPlaying(prev => !prev);
    };

    return (
        <section className="py-20">
            <div className="container md:h-[600px] relative bg-white group overflow-hidden rounded-lg">
                <div>
                    <video
                        src="/images/Cta-video.mp4"
                        ref={playerRef}
                        width="100%"
                        height="100%"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />

                    {/* Button logic */}
                    <button
                        onClick={handlePlayPause}
                        className={`
                            absolute inset-0 m-auto flex items-center justify-center 
                            w-[60px] h-[60px] rounded-full shadow-lg bg-neutral-50/90 
                            transition-opacity duration-300

                            ${isPlaying
                                ? (
                                    isMobile
                                        ? "opacity-40"   // Mobile playing → slightly visible
                                        : "opacity-0 group-hover:opacity-100" // Desktop playing → hidden until hover
                                  )
                                : "opacity-100" // Paused → always visible
                            }
                        `}
                    >
                        {isPlaying ? <RiPauseFill size={30} /> : <RiPlayFill size={30} />}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
