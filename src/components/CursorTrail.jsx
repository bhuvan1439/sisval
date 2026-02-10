import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorTrail = () => {
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newHeart = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                emoji: ['💖', '✨', '🌸', '❤️'][Math.floor(Math.random() * 4)],
            };

            setTrail((prev) => [...prev.slice(-15), newHeart]); // Keep last 15 items
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Cleanup old trail items automatically
    useEffect(() => {
        const interval = setInterval(() => {
            setTrail((prev) => prev.filter(item => Date.now() - item.id < 800));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            <AnimatePresence>
                {trail.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 1, scale: 0.8, x: item.x, y: item.y }}
                        animate={{
                            opacity: 0,
                            scale: 0.2,
                            y: item.y + 20 // Fall down slightly
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute text-xl"
                        style={{ left: 0, top: 0 }} // Position handled by motion initial
                    >
                        {item.emoji}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CursorTrail;
