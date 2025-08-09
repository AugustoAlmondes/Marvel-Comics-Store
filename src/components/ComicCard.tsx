import { motion } from 'motion/react';
import { CgShoppingCart } from 'react-icons/cg';
import { useNavigate } from 'react-router';
import type { ComicCard } from '../types/comic';

export default function ComicCard({ comic }: ComicCard) {

    const navigate = useNavigate();

    return (
        <motion.div
            onClick={() => navigate(`/product`)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ y: -5 }}
            className={`bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#2A2A2A] shadow-lg`}
        >
            <div className={`aspect-[2/3] relative`}>
                <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    className={`w-full h-full object-cover`}
                />
                
                {/* Tag para quadrinhos raros (10% conforme PDF) */}
                {comic.isRare && (
                    <div className={`absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-bold`}>
                        RARE
                    </div>
                )}
            </div>
            
            <div className={`p-4`}>
                <h3 className={`font-bold text-lg truncate`}>{comic.title}</h3>
                {comic.issueNumber && (
                    <p className={`text-sm text-[#E3E3E3]`}>Issue #{comic.issueNumber}</p>
                )}
                <div className={`flex justify-between items-center mt-2`}>
                    <p className={`text-xl text-[#B5F684]`}>
                        ${comic.prices[0]?.price.toFixed(2) || 'N/A'}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-1 rounded-full hover:bg-[#B5F684] hover:text-black transition-colors`}
                    >
                        <CgShoppingCart size={23} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}