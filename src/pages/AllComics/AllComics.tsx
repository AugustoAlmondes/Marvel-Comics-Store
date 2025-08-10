import { motion } from 'motion/react';
import BackgroundTop from '../../assets/about-background.png';
import BackgroundBottom from '../../assets/welcome-background.png';
import ComicCard from '../../components/ComicCard';
import { Bounce, ToastContainer } from 'react-toastify';
import { useComics } from '../../hooks/useComics';
import Loading from '../../components/Loading';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function AllComics() {

    const { paginatedComics,
        currentPage,
        totalPages,
        setCurrentPage,
        isLoading } = useComics();

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`relative overflow-hidden min-h-screen transition-all duration-300 py-16 bg-[#0A0A0A]`}
        >
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Bounce}
            />
            <motion.img
                src={BackgroundBottom}
                alt=""
                className={`absolute top-0 left-0 w-full h-[80vh] object-cover opacity-20`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            />

            <motion.img
                src={BackgroundTop}
                alt=""
                className={`absolute bottom-0 left-0 w-full h-[80vh] object-cover opacity-50`}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            />

            <div className={`relative z-10 container mx-auto px-4 py-10`}>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`text-center mb-16`}
                    >
                        <h1 className={`text-5xl md:text-7xl mb-4 font-bangers`}>View All Products</h1>
                        <p className={`text-xl md:text-2xl text-[#E2E2E2] font-ruda`}>
                            Discover the rarest gems in the Marvel universe
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className={`mb-12 max-w-2xl mx-auto`}
                    >
                        <label className={`block text-[#E2E2E2] mb-2 text-left`}>Search comics</label>
                        <div className={`relative`}>
                            <input
                                type="text"
                                className={`w-full bg-[#E2E2E2] text-black py-3 px-4 pr-20 rounded-lg`}
                                placeholder="Type your favorite hero..."
                            />
                            <button
                                className={`absolute right-1 top-1 bg-[#B5F684] text-black py-1 px-4 rounded-md border-3 border-black [box-shadow:3px_3px_0px_0px_#000]`}
                            >
                                Search
                            </button>
                        </div>
                    </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >{isLoading ? (
                    <div className={`flex justify-center items-center`}>
                        <Loading />
                    </div>
                ) :
                    (
                        <>
                            <div className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8`}>
                                {paginatedComics.map((comic, index) => (
                                    <motion.div
                                        key={`${comic.id}-${currentPage}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * (index % 20) }}
                                    >
                                        <ComicCard comic={comic} />
                                    </motion.div>
                                ))}
                            </div>
                            <div className={`flex justify-center mt-12 gap-2`}>
                                {currentPage > 1 && (
                                    <motion.button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        whileHover={{ scale: 1.05 }}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] text-white cursor-pointer`}
                                    >
                                        <IoIosArrowBack />
                                    </motion.button>
                                )}

                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    const page = Math.max(1, Math.min(
                                        currentPage - 2,
                                        totalPages - 4
                                    )) + i;

                                    return page <= totalPages ? (
                                        <motion.button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-10 h-10 rounded-full cursor-pointer ${page === currentPage
                                                ? 'bg-[#B5F684] text-black'
                                                : 'bg-[#1A1A1A] text-white'
                                                }`}
                                        >
                                            {page}
                                        </motion.button>
                                    ) : null;
                                })}

                                {currentPage < totalPages && (
                                    <motion.button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        whileHover={{ scale: 1.05 }}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] text-white cursor-pointer`}
                                    >
                                        <IoIosArrowForward />
                                    </motion.button>
                                )}
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
};