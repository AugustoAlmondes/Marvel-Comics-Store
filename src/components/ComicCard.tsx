import { motion } from 'motion/react';
import { CgShoppingCart } from 'react-icons/cg';
import { useNavigate } from 'react-router';
import { useCart } from '../hooks/useCart';
import type { ComicCardType } from '../types/comic';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

interface ComicCardProps {
    comic: ComicCardType;
    onClick?: () => void;
    showAddToCart?: boolean;
}

export default function ComicCard({ comic, onClick, showAddToCart = true }: ComicCardProps) {
    const navigate = useNavigate();
    const { addItem, items } = useCart();

    function handleAddToCart(e: React.MouseEvent) {
        e.stopPropagation();

        addItem({
            ...comic,
            quantity: 1
        });

        console.log('Item adicionado ao carrinho:', items);
    };

    function handleCardClick() {
        if (onClick) {
            onClick();
        } else {
            navigate(`/product/${comic.id}`);
        }
    };

    return (
        <motion.div
            onClick={handleCardClick}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ y: -5 }}
            className={`bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#2A2A2A] shadow-lg cursor-pointer group`}
        >
            <div className={`aspect-[2/3] relative`}>
                <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    className={`w-full h-full object-cover group-hover:opacity-80 transition-opacity`}
                />

                {comic.isRare && (
                    <div className={`absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-bold`}>
                        RARE
                    </div>
                )}
            </div>

            <div className={`p-4`}>
                <h3 className={`font-bold text-lg truncate`}>{comic.title}</h3>
                {comic.pageCount && (
                    <p className={`text-sm text-[#E3E3E3]`}>Page {comic.pageCount}</p>
                )}
                <div className={`flex justify-between items-center mt-2`}>
                    <p className={`text-xl text-[#B5F684]`}>
                        ${comic.prices[0]?.price.toFixed(2) || 'N/A'}
                    </p>

                    {showAddToCart && (
                        <motion.button
                            onClick={(e) => {
                                handleAddToCart(e);
                                toast.success('Item adicionado ao carrinho!');

                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-2 rounded-full bg-[#1A1A1A] border border-[#333] hover:bg-[#B5F684] hover:text-black transition-colors cursor-pointer`}
                            aria-label="Add to cart"
                        >
                            <CgShoppingCart size={20} />
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}