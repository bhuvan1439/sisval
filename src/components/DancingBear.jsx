import React from 'react';
import { motion } from 'framer-motion';

const DancingBear = ({ style, className }) => {
    return (
        <motion.div
            className={`absolute pointer-events-none z-0 ${className || 'text-6xl'}`}
            style={style}
            animate={{
                y: [0, -20, 0],
                rotate: [-10, 10, -10],
                scale: [1, 1.1, 1]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            🧸
        </motion.div>
    );
};

export default DancingBear;
