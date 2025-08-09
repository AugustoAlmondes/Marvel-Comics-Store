import WelcomeBackground from '../../assets/welcome-background.png';
import SpiderMan from '../../assets/spider-man.png';
import StyledTitle from '../../components/StyledTitle';
import { motion } from 'motion/react';

export default function Welcome() {
    return (
        <section className="relative w-full min-h-[50vh] py-5 overflow-hidden">
            {/* Background com inner shadow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={WelcomeBackground}
                    alt="Welcome Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            </motion.div>

            {/* Imagem do Spider-Man com posicionamento absoluto */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="hidden md:block absolute right-[-8%] bottom-0 h-[80%] w-[50%] max-w-[800px] z-5"
                style={{
                    transform: 'translateX(10%)'
                }}
            >
                <img
                    src={SpiderMan}
                    alt="Spider-Man"
                    className="h-full w-full object-contain"
                />
            </motion.div>

            {/* Conteúdo principal */}
            <div className="relative z-10 h-full flex flex-col justify-end py-32 px-6 md:px-5 lg:px-15 container mx-auto">
                {/* Apenas o conteúdo de texto agora */}
                <div className="md:max-w-[60%]"> {/* Controla a largura do texto */}
                    <StyledTitle text="Choose your comic!" size={'text-7xl md:text-8xl lg:text-9xl'} />
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-7 ml-2 text-2xl md:text-2xl font-ruda text-[#E3E3E3] leading-tight"
                        style={{ textShadow: '2px 1px 0px #000' }}
                    >
                        The biggest battles start with a good story.
                    </motion.p>
                </div>

                {/* Botões */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-start mt-12">
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-[#E3E3E3] text-black py-2 px-8 text-md border-2 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-transform"
                    >
                        View products
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="bg-[#F0DBAD] text-black py-2 px-8 text-md border-2 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-transform"
                    >
                        About
                    </motion.button>
                </div>
            </div>
        </section>
    );
}