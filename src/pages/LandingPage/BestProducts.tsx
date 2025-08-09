import StyledTitle from '../../components/StyledTitle';
import ComicCard from '../../components/ComicCard';
import { motion } from 'motion/react';
import { comics } from '../../data/Cards';

export default function BestProducts() {
    return (
        <section className={`py-16 px-6 md:px-12 lg:px-24 bg-[#0A0A0A]`}>
            {/* Título e Subtítulo */}
            <div className={`mb-12`}>
                <StyledTitle text="BEST PRODUCTS" size={`text-6xl md:text-7xl`} />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`mt-4 text-xl md:text-2xl font-ruda text-[#E3E3E3] leading-tight`}
                    style={{ textShadow: '2px 1px 0px #000' }}
                >
                    Wake up the hero in you - collect the most legendary comics of Marvel!
                </motion.p>
            </div>

            {/* Grid de Cards */}
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-12`}>
                {comics.map((comic, index) => (
                    <ComicCard
                        key={index}
                        comic={{
                            ...comic,
                            isRare: Math.random() < 0.1 // 10% chance de ser raro
                        }}
                    />
                ))}
            </div>

            {/* Botão View More */}
            <div className={`flex justify-center`}>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r from-[#CCF8AB] to-[#B5F684] text-black py-2 px-8 text-md border-2 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all`}
                >
                    View More
                </motion.button>
            </div>
        </section>
    );
}