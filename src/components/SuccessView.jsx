import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import DancingBear from './DancingBear';
import Sparkles from './Sparkles';
import FloatingBalloons from './FloatingBalloons';

const SuccessView = ({ name }) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-screen bg-pink-50 animate-gradient text-center px-4 overflow-hidden relative"
        >
            <FloatingBalloons />
            <Confetti
                width={windowSize.width}
                height={windowSize.height}
                recycle={true}
                numberOfPieces={500}
            />

            {/* Heartbeat Background */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <span className="text-[20rem] md:text-[40rem] text-brand-pink/30">💖</span>
            </motion.div>

            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                className="z-10 bg-white/60 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border-4 border-brand-pink relative"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-10 -right-10 text-6xl"
                >
                    🧸
                </motion.div>

                <Sparkles>
                    <h1 className="text-4xl md:text-6xl font-pacifico text-brand-red mb-6">
                        Thank you so much! 💖
                    </h1>
                </Sparkles>
                <p className="text-2xl md:text-3xl text-gray-800 font-sans">
                    for your acceptance... <br />
                    i will give you the best valentine experience cutieee.. dear <span className="font-bold text-brand-red">{name}</span>
                </p>

                <motion.div
                    className="mt-8 text-6xl inline-block"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                    💑
                </motion.div>
            </motion.div>

            <DancingBear style={{ bottom: '20px', left: '20px' }} className="text-5xl md:text-8xl" />
            <DancingBear style={{ bottom: '20px', right: '20px' }} className="text-5xl md:text-8xl" />
        </motion.div>
    );
};
export default SuccessView;
