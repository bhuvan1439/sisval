import React from 'react';
import { motion } from 'framer-motion';

const hearts = ['❤️', '💖', '💘', '🌹', '🧸', '💕', '🥰', '💌'];

const HeartRain = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Create multiple hearts for density */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-4xl"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: -100,
                        opacity: 0,
                        scale: 0.5,
                        rotate: 0,
                    }}
                    animate={{
                        y: window.innerHeight + 100,
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 3, // Faster than floating hearts (3-8s)
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                    }}
                >
                    {hearts[Math.floor(Math.random() * hearts.length)]}
                </motion.div>
            ))}
        </div>
    );
};

export default HeartRain;
