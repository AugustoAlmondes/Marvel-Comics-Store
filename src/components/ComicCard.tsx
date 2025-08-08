import { motion } from 'motion/react';
import { CgShoppingCart } from 'react-icons/cg';

interface ComicCardProps {
    image: string;
    title: string;
    issue: string;
    price: string;
}

export default function ComicCard({ image, title, issue, price }: ComicCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.01 }}
            className={`bg-transparent rounded-lg transition-all hover:-translate-y-1 text-[#E3E3E3]`}
        >
            <div className={`aspect-[2/3] relative`}>
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover rounded-t-lg`}
                />
            </div>
            <div className={`p-4`}>
                <h3 className={`font-bold text-lg truncate`}>{title}</h3>
                <p className={`text-sm`}>{issue}</p>
                <div className={`flex justify-between items-center mt-2`}>
                    <p className={`text-xl text-[#CCF8AB]`}>{price}</p>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        <CgShoppingCart size={23} className={`hover:text-[#B5F684] transition-colors`} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}