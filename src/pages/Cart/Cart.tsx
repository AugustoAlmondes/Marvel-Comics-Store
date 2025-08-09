import { motion } from 'motion/react';
import { FiShoppingCart, FiX } from 'react-icons/fi';
import ComicCard from '../../components/ComicCard';
// import type { ComicCard as ComicCardType } from '../types/ComicCard';
// import { comics } from '../data/Cards';
import { useState } from 'react';
import { comics } from '../../data/Cards';

// Dados mockados - substitua pela sua lógica de carrinho real
const cartItems = [
    { ...comics[0], quantity: 1, isRare: true },
    { ...comics[1], quantity: 2, isRare: false },
    { ...comics[2], quantity: 1, isRare: false }
];

// Cupons mockados (conforme PDF)
const RARE_COUPONS = ["RARO10", "MARVEL20"];
const COMMON_COUPONS = ["COMUM15", "HEROIS25"];

export default function Cart() {
    const [coupon, setCoupon] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [error, setError] = useState("");

    // Calcular totais
    const subtotal = cartItems.reduce((sum, item) => sum + (item.prices[0].price * item.quantity), 0);
    const total = subtotal - discount;

    // Aplicar cupom
    const applyCoupon = () => {
        setError("");

        if (!coupon) {
            setError("Please enter a coupon code");
            return;
        }

        // Verificar se é cupom raro (aplicável apenas a HQs raras)
        if (RARE_COUPONS.includes(coupon)) {
            const hasRareItems = cartItems.some(item => item.isRare);
            if (!hasRareItems) {
                setError("Rare coupon can only be applied to rare comics");
                return;
            }
            setDiscount(subtotal * 0.1); // 10% de desconto
            setAppliedCoupon(coupon);
            return;
        }

        // Verificar cupom comum
        if (COMMON_COUPONS.includes(coupon)) {
            setDiscount(subtotal * 0.15); // 15% de desconto
            setAppliedCoupon(coupon);
            return;
        }

        setError("Invalid coupon code");
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`min-h-screen bg-[#0A0A0A] text-[#E3E3E3] py-15 px-6 md:px-12 lg:px-24`}
        >
            <div className={`max-w-7xl mx-auto`}>
                {/* Título */}
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className={`flex items-center gap-4 mb-12`}
                >
                    <h1 className={`text-4xl md:text-5xl font-bangers`}>Your Cart</h1>
                </motion.div>

                {/* Lista de Itens */}
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}>
                    <div className={`lg:col-span-2`}>
                        {cartItems.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`text-center py-16`}
                            >
                                <p className={`text-xl mb-4`}>Your cart is empty</p>
                                <button className={`bg-[#B5F684] text-black px-6 py-2 rounded-md`}>
                                    Browse Comics
                                </button>
                            </motion.div>
                        ) : (
                            <ul className={`space-y-6`}>
                                {cartItems.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={`bg-[#1A1A1A] rounded-lg p-4 border border-[#333]`}
                                    >
                                        <div className={`flex flex-col md:flex-row gap-6`}>
                                            <div className={`w-1/2 md:w-1/4`}>
                                                <ComicCard comic={item} />
                                            </div>

                                            <div className={`flex-1 flex flex-col justify-between`}>
                                                <div>
                                                    <h3 className={`text-xl font-bold`}>{item.title}</h3>
                                                    {item.isRare && (
                                                        <span className={`inline-block bg-yellow-500 text-black text-xs px-2 py-1 rounded-md mt-1`}>
                                                            RARE COMIC
                                                        </span>
                                                    )}
                                                </div>

                                                <div className={`flex justify-between items-end mt-4`}>
                                                    <div className={`flex items-center gap-4`}>
                                                        <button className={`w-8 h-8 flex items-center justify-center border rounded-md`}>
                                                            -
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button className={`w-8 h-8 flex items-center justify-center border rounded-md`}>
                                                            +
                                                        </button>
                                                    </div>

                                                    <div className={`text-right`}>
                                                        <p className={`text-[#B5F684] text-xl font-bold`}>
                                                            ${(item.prices[0].price * item.quantity).toFixed(2)}
                                                        </p>
                                                        <button className={`text-sm flex items-center gap-1 mt-1`}>
                                                            <FiX size={14} /> Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Resumo do Pedido */}
                    <div className={`lg:col-span-1`}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`bg-[#1A1A1A] border border-[#333] rounded-lg p-6 sticky top-6`}
                        >
                            <h2 className={`text-2xl font-bold mb-6`}>Order Summary</h2>

                            <div className={`space-y-4`}>
                                <div className={`flex justify-between`}>
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>

                                {/* Cupom de Desconto */}
                                <div className={`pt-4 border-t border-[#333]`}>
                                    <label className={`block mb-2`}>Coupon Code</label>
                                    <div className={`flex gap-2`}>
                                        <input
                                            type="text"
                                            value={coupon}
                                            onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                                            className={`flex-1 bg-[#0A0A0A] border border-[#333] rounded-md px-4 py-2`}
                                            placeholder="Enter coupon"
                                        />
                                        <button
                                            onClick={applyCoupon}
                                            className={`bg-[#B5F684] text-black px-4 py-2 rounded-md`}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {error && <p className={`text-red-500 text-sm mt-1`}>{error}</p>}
                                    {appliedCoupon && (
                                        <p className={`text-green-500 text-sm mt-1`}>
                                            Coupon applied: {appliedCoupon} (-${discount.toFixed(2)})
                                        </p>
                                    )}
                                </div>

                                <div className={`pt-4 border-t border-[#333]`}>
                                    <div className={`flex justify-between font-bold text-lg`}>
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    disabled={cartItems.length === 0}
                                    className={`w-full bg-gradient-to-r from-[#CCF8AB] to-[#B5F684] text-black py-3 px-6 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-6 disabled:opacity-50`}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}