import React from 'react';
import { motion } from 'framer-motion';

const hearts = ['❤️', '💖', '💘', '🌹', '🧸', '💕', '🥰'];

const FloatingHearts = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart, i) => (
                <motion.div
                    key={i}
                    className="absolute text-4xl"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        y: -100,
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                    }}
                >
                    {heart}
                </motion.div>
            ))}
            {/* Add more hearts for density */}
            {hearts.map((heart, i) => (
                <motion.div
                    key={`batch2-${i}`}
                    className="absolute text-2xl"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100,
                        opacity: 0,
                        scale: 0.3,
                    }}
                    animate={{
                        y: -100,
                        opacity: [0, 0.8, 0],
                        scale: [0.3, 1, 0.3],
                        rotate: [0, -360],
                    }}
                    transition={{
                        duration: Math.random() * 15 + 15,
                        repeat: Infinity,
                        delay: Math.random() * 7,
                        ease: "linear",
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                    }}
                >
                    {heart}
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
