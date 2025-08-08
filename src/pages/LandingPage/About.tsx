// sections/About.tsx
import { motion } from 'motion/react';
import AboutImage from '../../assets/iron-man.png';
import AboutBackground from '../../assets/about-background.png';

export default function About() {
    return (
        <section
            className={`relative flex items-center w-full min-h-screen py-16 px-6 md:px-12 lg:px-24 overflow-hidden`}
            style={{
                backgroundImage: `url(${AboutBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Overlay escuro para melhor legibilidade */}

            {/* Conteúdo principal */}
            <div className={`relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto`}>
                {/* Coluna esquerda (imagem) - oculta em telas menores */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`hidden lg:flex items-center justify-center`}
                >
                    <img
                        src={AboutImage}
                        alt="About us"
                        className={`max-h-[80vh] w-full object-contain`}
                    />
                </motion.div>

                {/* Coluna direita (texto) */}
                <div className={`flex flex-col justify-center`}>
                    {/* Título */}
                    <h1 className={`font-bangers text-6xl md:text-7xl lg:text-8xl text-[#E3E3E3]`}>
                        ABOUT
                    </h1>

                    {/* Parágrafos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className={`space-y-6 text-[#E3E3E3] font-ruda text-lg md:text-xl`}
                    >
                        <p>
                            Our mission is to bring the magic of Marvel comics to collectors and fans worldwide.
                            Founded by passionate comic enthusiasts, we curate the most iconic issues and rare
                            editions for true believers.
                        </p>
                        <p>
                            Every comic in our collection is carefully selected for its historical significance,
                            artistic value, and impact on the Marvel Universe. From the first appearances of
                            legendary heroes to epic crossover events, we've got stories that shaped pop culture.
                        </p>
                        <p>
                            Whether you're a seasoned collector or just starting your journey into the Marvel
                            Multiverse, we're here to help you find those key issues that will make your
                            collection truly legendary.
                        </p>
                    </motion.div>

                    {/* Botões */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className={`flex flex-col sm:flex-row gap-6 mt-12`}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`border-2 border-[#E3E3E3] bg-transparent text-[#E3E3E3] py-2 px-8 text-md hover:bg-[#E3E3E3] hover:text-black transition-all`}
                        >
                            View More
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`border-2 border-[#E3E3E3] bg-transparent text-[#E3E3E3] py-2 px-8 text-md hover:bg-[#E3E3E3] hover:text-black transition-all`}
                        >
                            Developer
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}