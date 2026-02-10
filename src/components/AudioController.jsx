import React, { useState, useEffect, useRef } from 'react';

const AudioController = ({ playMusic, onToggle }) => {
    const audioRef = useRef(new Audio('/music.mp3'));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = 0.5;

        // Try to play automatically (might be blocked by browser)
        const tryPlay = async () => {
            try {
                if (playMusic) {
                    await audio.play();
                    setIsPlaying(true);
                } else {
                    audio.pause();
                    setIsPlaying(false);
                }
            } catch (e) {
                console.log("Autoplay blocked, waiting for interaction");
            }
        };

        tryPlay();

        return () => {
            audio.pause();
        };
    }, [playMusic]);

    return (
        <button
            onClick={onToggle}
            className="fixed bottom-4 left-4 z-50 p-3 bg-white/80 backdrop-blur rounded-full shadow-lg text-2xl hover:bg-white transition-all"
            title={isPlaying ? "Mute Music" : "Play Music"}
        >
            {isPlaying ? "🎵" : "🔇"}
        </button>
    );
};

export const playSound = (type) => {
    const sounds = {
        pop: '/pop.mp3',
        swoosh: '/swoosh.mp3',
    };

    if (sounds[type]) {
        const audio = new Audio(sounds[type]);
        audio.volume = 0.7;
        audio.play().catch(e => console.log("Sound play failed", e));
    }
};

export default AudioController;
