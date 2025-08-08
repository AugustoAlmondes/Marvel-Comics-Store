import { motion } from "motion/react";
export default function StyledTitle({ text, size }: { text: string; size: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="relative inline-block">
            <div
                className={`absolute font-bangers font-bold text-${size}  text-[black] z-0
                    before:text-shadow before:absolute before:[text-shadow:10px_10px_0_#000]`}
                style={{ top: '4px', left: '6px' }}
            >
                {
                    text.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.3 + index * 0.2, duration: 0.5 }}
                            className={`font-bangers`}
                        >
                            {letter}
                        </motion.span>
                    ))
                }
            </div>

            <h1 className={`relative font-bangers text-${size} bg-clip-text text-transparent bg-gradient-to-l from-[#FFAE00] to-[#F0DBAD] z-10
                before:[text-shadow:10px_10px_0_#144asd] [-webkit-text-stroke:2px_#000]`}>
                {
                    text.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                            className={`font-bangers`}
                        >
                            {letter}
                        </motion.span>
                    ))
                }
            </h1>
        </motion.div>
    );
}