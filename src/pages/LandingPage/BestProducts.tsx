import StyledTitle from '../../components/StyledTitle';
import ComicCard from '../../components/ComicCard';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useComics } from '../../hooks/useComics';
import Loading from '../../components/Loading';




export default function BestProducts() {

    const { comics, isLoading } = useComics();
    const fiveComics = comics?.slice(0, 6) || [];


    return (
        <section className={`py-16 px-6 md:px-12 lg:px-24 min-h-[70vh] bg-[#0A0A0A]`}>

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

            {
                isLoading ? (
                    <div className={`flex justify-center items-center`}>
                        <Loading/>
                    </div>
                ) : (
                    <>
                        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 mb-12`}>
                            {
                                fiveComics.map((comic) => (
                                    <ComicCard
                                        key={comic.id}
                                        comic={{
                                            ...comic
                                        }}
                                    />
                                ))
                            }
                        </div>
                        <div className={`flex justify-center`}>
                            <Link to='/products'>
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}

                                    className={`bg-gradient-to-r from-[#CCF8AB] to-[#B5F684] text-black py-2 px-8 text-md border-2 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all cursor-pointer`}
                                >
                                    View More
                                </motion.button>
                            </Link>
                        </div>
                    </>
                )}
        </section>
    );
}