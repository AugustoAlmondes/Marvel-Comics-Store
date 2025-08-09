// pages/ProductDetails.tsx
import { motion } from 'motion/react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';
import ComicCard from '../../components/ComicCard';
import InfoBackground from '../../assets/info-background.png';
import { comics } from '../../data/Cards';
// import { useParams } from 'react-router';

export default function ProductDetails() {
    const comic = {
        id: 1,
        title: "The Amazing Spider-Man #1",
        cover: "./comic1.jpg",
        price: "$4.99",
        description: "First appearance of Spider-Man! This historic issue introduces Peter Parker and his transformation into the iconic web-slinger.",
        details: {
            publisher: "Marvel Comics",
            releaseDate: "March 1963",
            writers: "Stan Lee",
            artists: "Steve Ditko",
            pages: 32
        },
        related: comics.splice(0, 4)
    };



    return (
        <div className="bg-[#0A0A0A] min-h-screen relative text-[#E3E3E3]">

            <div className={`absolute bottom-0 left-0 right-0 z-0`}>
                <img
                    src={InfoBackground}
                    alt="Background"
                    className={`w-full h-full object-cover opacity-50`}
                />
            </div>

            {/* Conteúdo com z-index maior */}
            <div className={`relative z-10`}>
                <header className={`border-b border-[#333] py-4 px-6 md:px-12 lg:px-24 mt-10`}>
                    <motion.button
                        whileHover={{ x: -5 }}
                        className={`flex items-center gap-2`}
                    >
                        <FaArrowLeft />
                        <span>Back to Collection</span>
                    </motion.button>
                </header>

                <main className="py-8 px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <img
                                src={comic.cover}
                                alt={comic.title}
                                className="mx-auto max-h-[70vh] object-contain rounded-lg border-2 border-[#E3E3E3]"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="font-bangers text-4xl md:text-5xl mb-4">{comic.title}</h1>

                            <div className="mb-8">
                                <span className="text-3xl font-bold text-[#B5F684]">{comic.price}</span>
                                <span className="text-sm ml-2">+ shipping</span>
                            </div>

                            <p className="mb-8 text-lg leading-relaxed">{comic.description}</p>

                            <div className="mb-8 p-6 border border-[#333] rounded-lg">
                                <h2 className="font-bangers text-2xl mb-4">Comic Details</h2>
                                <ul className="space-y-2">
                                    {Object.entries(comic.details).map(([key, value]) => (
                                        <li key={key} className="flex justify-between border-b border-[#333] pb-2">
                                            <span className="font-bold">{key}:</span>
                                            <span>{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 bg-gradient-to-r from-[#CCF8AB] to-[#B5F684] text-black py-3 px-6 font-bold border-2 border-black"
                                >
                                    ADD TO CART
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 border-2 border-[#E3E3E3] py-3 px-6"
                                >
                                    BUY NOW
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    <section className={`mt-24 relative`}>
                        <h2 className={`font-bangers text-3xl mb-8 relative z-10`}>Related Comics</h2>
                        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12 relative z-10`}>
                            {comic.related.map((comic, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <ComicCard comic={comic} />
                                </motion.div>
                            ))}
                        </div>
                        <Link to='/products'>
                            <button
                                className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-60px] text-[#E3E3E3] underline py-3 px-6 font-bold z-10 hover:text-[#B5F684] transition-colors`}>
                                View More
                            </button>
                        </Link>
                    </section>
                </main>
            </div>
        </div>
    );
}