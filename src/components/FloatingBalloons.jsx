import React from 'react';
import { motion } from 'framer-motion';

const balloonColors = ['#FF69B4', '#FF1493', '#FF4500', '#FF0000', '#C71585'];

const FloatingBalloons = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute flex flex-col items-center"
                    initial={{
                        y: window.innerHeight + 200,
                        x: Math.random() * window.innerWidth,
                    }}
                    animate={{
                        y: -200,
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        delay: Math.random() * 20,
                        ease: "linear",
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                    }}
                >
                    {/* Balloon Shape */}
                    <div
                        className="w-16 h-20 rounded-full"
                        style={{
                            backgroundColor: balloonColors[Math.floor(Math.random() * balloonColors.length)],
                            borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                            boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.1)'
                        }}
                    />
                    {/* String */}
                    <div className="w-0.5 h-24 bg-gray-400/50" />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingBalloons;
