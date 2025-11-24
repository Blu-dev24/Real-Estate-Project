import { RiPauseFill, RiPlayFill } from '@remixicon/react';
import React, { useRef, useState, useEffect } from 'react';

const Cta = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768); // simple mobile detection
    }, []);

    const togglePlayPause = () => {
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

                {/* VIDEO */}
                <video
                    src="/images/Cta-video.mp4"
                    ref={playerRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onClick={isMobile ? togglePlayPause : undefined} 
                />

                {/* DESKTOP BUTTON ONLY */}
                {!isMobile && (
                    <button
                        onClick={togglePlayPause}
                        className={`
                            absolute inset-0 m-auto flex items-center justify-center 
                            w-[60px] h-[60px] rounded-full shadow-lg bg-neutral-50/90 
                            transition-opacity duration-300

                            ${isPlaying
                                ? "opacity-0 group-hover:opacity-100"
                                : "opacity-100"
                            }
                        `}
                    >
                        {isPlaying ? <RiPauseFill size={30} /> : <RiPlayFill size={30} />}
                    </button>
                )}
            </div>
        </section>
    );
};

export default Cta;
