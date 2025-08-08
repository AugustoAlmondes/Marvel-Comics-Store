import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
// import { Link } from 'react-router';
import MarvelLogo from '../assets/marvel-logo.png';
import { motion, AnimatePresence } from 'motion/react'
import NavLinks from './NavLinks';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}

            className={`bg-gradient-to-l from-[#1A1A1A] to-[#0F0F0F] py-2 px-6 sticky top-0 z-[999] shadow-[0px_50px_50px_0px_#000000]`}>
            <div className={`flex justify-between items-center max-w-6xl mx-auto`}>
                <a href='#'>
                    <img
                        src={MarvelLogo}
                        alt="Marvel Logo"
                        className={`h-13 md:h-15`}
                    />
                </a>

                <button
                    className={`md:hidden text-[#E3E3E3]`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                </button>

                <nav className={`hidden md:flex items-center space-x-8`}>
                    <NavLinks />
                </nav>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { opacity: 0},
                            visible: { opacity: 1},
                            exit: { opacity: 0 },
                        }}
                        className={`md:hidden bg-[#282828] w-full absolute bottom-[-40px] left-0 px-6 py-3 shadow-lg z-[1]`}>
                        <motion.nav
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className={`flex items-center justify-center space-y-4 text-[#E3E3E3]`}>
                            <NavLinks />
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};