import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingHearts from './FloatingHearts';
import HeartRain from './HeartRain';
import { playSound } from './AudioController';
import DancingBear from './DancingBear';
import Sparkles from './Sparkles';
import FloatingBalloons from './FloatingBalloons';

const ProposalView = ({ onYes, name }) => {
    const [noHovered, setNoHovered] = useState(false);

    // Staggered text animation
    const text = `Hey ${name || 'Cutie'}, will you be my Valentine...?`.split(" ");

    const handleNoHover = (e) => {
        setNoHovered(true);
        playSound('swoosh');

        const buttonWidth = e.target.offsetWidth;
        const buttonHeight = e.target.offsetHeight;

        const maxX = window.innerWidth - buttonWidth - 40;
        const maxY = window.innerHeight - buttonHeight - 40;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        e.target.style.position = 'fixed';
        e.target.style.left = `${randomX}px`;
        e.target.style.top = `${randomY}px`;
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pink-50 animate-gradient">
            <FloatingBalloons />
            <FloatingHearts />
            <HeartRain />

            <div className="z-10 text-center p-8">
                <div className="mb-12 overflow-hidden min-h-[100px] flex items-center justify-center">
                    <Sparkles>
                        <motion.div className="text-5xl md:text-7xl font-pacifico text-brand-red drop-shadow-md">
                            {text.join(" ").split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.05,
                                        delay: index * 0.05,
                                        ease: "linear",
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </Sparkles>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 77, 77, 0.6)" }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            scale: [1, 1.05, 1],
                            boxShadow: ["0px 0px 0px rgba(255,77,77,0)", "0px 0px 20px rgba(255,77,77,0.4)", "0px 0px 0px rgba(255,77,77,0)"]
                        }}
                        transition={{
                            scale: { repeat: Infinity, duration: 1.5 },
                            boxShadow: { repeat: Infinity, duration: 1.5 }
                        }}
                        onClick={onYes}
                        className="px-12 py-4 bg-brand-red text-white text-2xl font-bold rounded-full shadow-lg transition-all cursor-pointer z-50"
                    >
                        YES! 💖
                    </motion.button>

                    <motion.button
                        onMouseEnter={handleNoHover}
                        animate={noHovered ? { rotate: [0, 10, -10, 0], transition: { duration: 0.2 } } : {}}
                        className="px-12 py-4 bg-gray-300 text-gray-700 text-2xl font-bold rounded-full shadow-lg transition-all z-50"
                    >
                        {noHovered ? "No 😢" : "No"}
                    </motion.button>
                </div>
            </div>

            <DancingBear style={{ bottom: '10px', left: '10px', fontSize: '3rem' }} />
            <DancingBear style={{ bottom: '10px', right: '10px', fontSize: '3rem' }} />
        </div>
    );
};

export default ProposalView;
