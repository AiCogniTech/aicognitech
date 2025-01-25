"use client";
import React, { useRef, useEffect } from 'react';

const HeroVideo = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    // const t = await getTranslations("Hero");

    useEffect(() => {
        // Set the playbackRate for the video
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // Slow down the video to half speed
        }
    }, []);
    return (
        <video
            ref={videoRef}
            src="/videos/hero-background.mp4"
            autoPlay
            loop
            muted
            className='absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-95'
        />
    )
}

export default HeroVideo