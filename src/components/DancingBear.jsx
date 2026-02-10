import React from 'react';
import { motion } from 'framer-motion';

const DancingBear = ({ style }) => {
    return (
        <motion.div
            className="absolute text-6xl pointer-events-none z-0"
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
