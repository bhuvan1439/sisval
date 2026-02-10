import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Sparkle = ({ style }) => (
    <motion.span
        style={style}
        className="absolute block pointer-events-none text-yellow-400 z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180]
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
    >
        ✨
    </motion.span>
);

const Sparkles = ({ children }) => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newSparkle = {
                id: Date.now(),
                style: {
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 10 + 10}px`
                }
            };
            setSparkles(prev => [...prev.slice(-5), newSparkle]);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative inline-block">
            {sparkles.map(sparkle => (
                <Sparkle key={sparkle.id} style={sparkle.style} />
            ))}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default Sparkles;
