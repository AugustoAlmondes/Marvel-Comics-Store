// components/Footer.tsx
import { motion } from 'motion/react';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className={`bg-[#0A0A0A] text-[#E3E3E3] border-t-2 border-[#E3E3E3]`}>
            <div className={`container mx-auto px-6 md:px-12 lg:px-24 py-12`}>
                {/* Grid do Footer */}
                <div className={`grid grid-cols-1 md:grid-cols-4 gap-10`}>

                    {/* Coluna 1 - Logo e redes sociais */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`flex flex-col items-center md:items-start`}
                    >
                        <h2 className={`font-bangers text-4xl mb-4`}>MARVELOUS</h2>
                        <p className={`text-sm mb-6 text-center md:text-left`}>The ultimate destination for comic collectors</p>

                        <div className={`flex space-x-4`}>
                            <motion.a
                                href="#"
                                whileHover={{ y: -3 }}
                                className={`p-2 border border-[#E3E3E3] rounded-full`}
                            >
                                <FaInstagram size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ y: -3 }}
                                className={`p-2 border border-[#E3E3E3] rounded-full`}
                            >
                                <FaTwitter size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ y: -3 }}
                                className={`p-2 border border-[#E3E3E3] rounded-full`}
                            >
                                <FaFacebookF size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ y: -3 }}
                                className={`p-2 border border-[#E3E3E3] rounded-full`}
                            >
                                <FaYoutube size={18} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Coluna 2 - Links rápidos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={`font-bangers text-2xl mb-4`}>Quick Links</h3>
                        <ul className={`space-y-2`}>
                            <li><motion.a href="#" whileHover={{ x: 5 }} className={`hover:text-[#B5F684] transition-colors`}>Home</motion.a></li>
                            <li><motion.a href="#" whileHover={{ x: 5 }} className={`hover:text-[#B5F684] transition-colors`}>Shop</motion.a></li>
                            <li><motion.a href="#" whileHover={{ x: 5 }} className={`hover:text-[#B5F684] transition-colors`}>About</motion.a></li>
                            <li><motion.a href="#" whileHover={{ x: 5 }} className={`hover:text-[#B5F684] transition-colors`}>New Releases</motion.a></li>
                        </ul>
                    </motion.div>

                    {/* Coluna 3 - Contato */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={`font-bangers text-2xl mb-4`}>Contact</h3>
                        <ul className={`space-y-2`}>
                            <li className={`flex items-center space-x-2`}>
                                <MdEmail />
                                <span>contact@marvelous.com</span>
                            </li>
                            <li>123 Comic Street, NY</li>
                            <li>Open 9AM - 6PM</li>
                        </ul>
                    </motion.div>

                    {/* Coluna 4 - Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={`font-bangers text-2xl mb-4`}>Newsletter</h3>
                        <p className={`mb-4 text-sm`}>Subscribe for updates and exclusive offers</p>

                        <form className={`flex flex-col space-y-4`}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className={`bg-transparent border border-[#E3E3E3] px-4 py-2 focus:outline-none focus:border-[#B5F684]`}
                            />
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`bg-gradient-to-r from-[#CCF8AB] to-[#B5F684] text-black py-2 px-6 font-bold border-2 border-black`}
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className={`border-t border-[#333] mt-12 pt-6 text-center text-sm`}
                >
                    <p>© {new Date().getFullYear()} Marvelous Comics. All rights reserved.</p>
                    <div className={`flex justify-center space-x-4 mt-2`}>
                        <a href="#" className={`hover:text-[#B5F684] transition-colors`}>Privacy Policy</a>
                        <a href="#" className={`hover:text-[#B5F684] transition-colors`}>Terms of Service</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}