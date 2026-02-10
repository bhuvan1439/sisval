import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Sparkles from './Sparkles';
import FloatingBalloons from './FloatingBalloons';
import DancingBear from './DancingBear';

const LandingView = ({ onContinue }) => {
    const [name, setName] = useState('');

    // 3D Tilt Logic
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onContinue(name);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen bg-pink-100 animate-gradient px-4 perspective-1000 overflow-hidden relative"
            style={{ perspective: 1000 }}
        >
            <FloatingBalloons />
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-full max-w-md p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 text-center relative z-10"
            >
                <motion.div
                    style={{ transform: "translateZ(50px)" }}
                    className="mb-6"
                >
                    <motion.span
                        className="text-6xl inline-block"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        💌
                    </motion.span>
                    <Sparkles>
                        <h1 className="text-4xl font-pacifico text-brand-red mt-4">What's your name cutiee..?</h1>
                    </Sparkles>
                </motion.div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ transform: "translateZ(30px)" }}>
                    <motion.input
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        type="text"
                        placeholder="Enter your name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-6 py-3 rounded-full border-2 border-brand-pink focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-pink/50 text-lg transition-all"
                        required
                        autoFocus
                    />

                    <motion.button
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 77, 77, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-3 bg-brand-red text-white text-xl font-bold rounded-full shadow-lg hover:bg-red-600 transition-all"
                    >
                        Continue
                    </motion.button>
                </form>
            </motion.div>

            <DancingBear style={{ bottom: '20px', left: '20px', fontSize: '4rem' }} />
            <DancingBear style={{ bottom: '20px', right: '20px', fontSize: '4rem' }} />
        </motion.div>
    );
};

export default LandingView;
