import { motion } from 'motion/react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import InfoBackground from '../../assets/info-background.png';
import ComicCard from '../../components/ComicCard';
import { useCart } from '../../hooks/useCart';
import { toast, ToastContainer } from 'react-toastify';
import type { ComicCardType } from '../../types/comic';
import { useComics } from '../../hooks/useComics';
import Loading from '../../components/Loading';

export default function ProductDetails() {
    const { id } = useParams();
    const { comics, isLoading } = useComics();
    const { addItem } = useCart();

    // Garanta que comic.id existe usando Type Assertion
    const comic = comics?.find(c => c.id === Number(id)) as ComicCardType;

    const recommended = comics
        ? comics
            .filter(c => c.id !== Number(id))
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
        : [];

    if (isLoading) {
        return (
            <div className={`w-full h-screen flex flex-col gap-4 items-center justify-center bg-[#0A0A0A]`}>
                <Loading/>
            </div>
        );
    }

    if (!comic) {
        return (
            <div className={`w-full h-screen flex flex-col gap-4 items-center justify-center bg-[#0A0A0A]`}>
                <h1 className={`text-2xl`}>Comic not found</h1>
                <Link to="/" className={`text-[#B5F684] underline`}>
                    Back to home
                </Link>
            </div>
        );
    }

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        addItem({
            ...comic,
            quantity: 1,
            isRare: comic.isRare || false
        });

        toast.success('Item adicionado ao carrinho!');
    };

    return (
        <div className={`bg-[#0A0A0A] min-h-screen relative text-[#E3E3E3]`}>
            <ToastContainer
                position={`bottom-right`}
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={`absolute bottom-0 left-0 right-0 z-0`}>
                <img
                    src={InfoBackground}
                    alt={`Background`}
                    className={`w-full h-full object-cover opacity-50`}
                />
            </div>

            <div className={`relative z-10`}>
                <header className={`border-b border-[#333] py-4 px-6 md:px-12 lg:px-24 mt-10`}>
                    <Link to="/" className={`flex items-center gap-2`}>
                        <FaArrowLeft />
                        <span>Back to Collection</span>
                    </Link>
                </header>

                <main className={`py-8 px-6 md:px-12 lg:px-24`}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto`}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`relative flex justify-center`}
                        >
                            <img
                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                alt={comic.title}
                                className={`max-h-[70vh] object-contain rounded-lg border-2 border-[#E3E3E3]`}
                            />
                            {comic.isRare && (
                                <div className={`absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-bold`}>
                                    RARE EDITION
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className={`text-4xl md:text-5xl font-bold mb-4`}>{comic.title}</h1>

                            <div className={`mb-8`}>
                                <span className={`text-3xl font-bold text-[#B5F684]`}>
                                    ${comic.prices[0]?.price.toFixed(2) || 'N/A'}
                                </span>
                                <span className={`text-sm ml-2`}>+ shipping</span>
                            </div>

                            {comic.textObjects?.[0]?.text && (
                                <p className={`mb-8 text-lg leading-relaxed`}>
                                    {comic.textObjects[0].text}
                                </p>
                            )}

                            <div className={`mb-8 p-6 border border-[#333] rounded-lg`}>
                                <h2 className={`text-2xl font-bold mb-4`}>Comic Details</h2>
                                <ul className={`space-y-3`}>
                                    {comic.pageCount && (
                                        <li>
                                            <span className={`font-semibold`}>Pages:</span> {comic.pageCount}
                                        </li>
                                    )}

                                    {comic.creators?.items && (
                                        <li>
                                            <span className={`font-semibold`}>Creators:</span>
                                            <ul className={`mt-1 ml-4`}>
                                                {comic.creators.items.map((creator, index) => (
                                                    <li key={index}>
                                                        {creator.name} ({creator.role})
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div className={`flex flex-col sm:flex-row gap-4`}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleAddToCart}
                                    className={`flex-1 bg-gradient-to-r from-[#CCF8AB] to-[#B5F684] text-black py-3 px-6 font-bold border-2 border-black`}
                                >
                                    ADD TO CART
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex-1 border-2 border-[#E3E3E3] py-3 px-6`}
                                >
                                    BUY NOW
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    <section className={`mt-24 relative`}>
                        <h2 className={`text-3xl font-bold mb-8`}>Related Comics</h2>
                        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12`}>
                            {recommended.map((comic) => (
                                <motion.div
                                    key={comic.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ComicCard comic={comic} />
                                </motion.div>
                            ))}
                        </div>
                        <Link to="/products">
                            <button className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-60px] text-[#E3E3E3] underline py-3 px-6 font-bold hover:text-[#B5F684] transition-colors`}>
                                View More
                            </button>
                        </Link>
                    </section>
                </main>
            </div>
        </div>
    );
}