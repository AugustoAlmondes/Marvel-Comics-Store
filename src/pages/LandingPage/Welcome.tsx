import WelcomeBackground from '../../assets/welcome-background.png';
import SpiderMan from '../../assets/spider-man.png';
import StyledTitle from '../../components/StyledTitle';
import { motion } from 'motion/react';

export default function Welcome() {
    return (
        <>
            <section className={`relative w-full min-h-[80vh] py-20`}>
                {/* Background com inner shadow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 z-[0]`}>
                    <img
                        src={WelcomeBackground}
                        alt="Welcome Background"
                        className={`w-full h-full object-cover`}
                    />
                    <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent`}></div>
                </motion.div>

                {/* Conteúdo principal */}
                <div className={`relative z-10 h-full flex flex-col justify-end py-32 px-6 md:px-12 lg:px-24`}>
                    {/* Grid com texto e imagem */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16`}>
                        {/* Coluna esquerda (texto) */}
                        <div className={`flex flex-col justify-center`}>
                            <StyledTitle text="Choose your comic!" size={'7xl'} />

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 3 }}
                                className={`mt-7 ml-2 text-2xl md:text-2xl font-ruda
                                [text-shadow:2px_1px_0px_#000] text-[#E3E3E3]  leading-tight`}>{'The biggest battles start with a good story.'.split('').map((letter, index) => (<motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + index * 0.1, duration: 0.1 }}>{letter}</motion.span>))}</motion.p>
                        </div>

                        {/* Coluna direita (imagem) */}
                        <div className={`hidden md:flex items-center justify-center md:justify-end`}>
                            <img
                                src={SpiderMan}
                                alt="Spider-Man"
                                className={`h-full max-h-[600px] object-contain`}
                            />
                        </div>
                    </div>

                    {/* Botões */}
                    <div className={`flex flex-col mx-auto md:flex-row gap-6 md:gap-8 justify-center md:justify-start`}>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 3 }}
                            className={`bg-[#E3E3E3] text-black py-2 px-8 text-md border-2 border-black border-opacity-100 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]`}>
                            View products
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 3.3 }}
                            className={`bg-[#F0DBAD] text-black py-2 px-8 text-md border-2 border-black border-opacity-100 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]`}>
                            About
                        </motion.button>
                    </div>
                </div>
            </section>
        </>
    );
}