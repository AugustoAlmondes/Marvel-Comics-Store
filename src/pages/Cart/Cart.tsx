import { motion } from 'motion/react';
import { FiX, FiShoppingCart } from 'react-icons/fi';
import ComicCard from '../../components/ComicCard';
import { Link } from 'react-router';
import { useCart } from '../../hooks/useCart';
import { useState } from 'react';

export default function Cart() {
    const {
        items: cartItems,
        removeItem,
        updateQuantity,
        subtotal,
        discount,
        appliedCoupon,
        applyCoupon,
        clearCart
    } = useCart();

    const [coupon, setCoupon] = useState("");
    const [error, setError] = useState("");

    const handleApplyCoupon = () => {
        const result = applyCoupon(coupon);
        if (!result.success) {
            setError(result.message);
        } else {
            setError("");
        }
    };

    const handleQuantityChange = (id: number, newQuantity: number) => {
        if (newQuantity < 1) {
            removeItem(id);
        } else {
            updateQuantity(id, newQuantity);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#0A0A0A] text-[#E3E3E3] py-16 px-6 md:px-12 lg:px-24"
        >
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <FiShoppingCart size={32} className="text-[#B5F684]" />
                    <h1 className="text-4xl md:text-5xl font-bold">Your Cart</h1>
                </motion.div>

                {/* Lista de Itens */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {cartItems.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <p className="text-xl mb-4">Your cart is empty</p>
                                <Link
                                    to="/products"
                                    className="inline-block bg-[#B5F684] text-black px-6 py-2 rounded-md"
                                >
                                    Browse Comics
                                </Link>
                            </motion.div>
                        ) : (
                            <ul className="space-y-6">
                                {cartItems.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-[#1A1A1A] rounded-lg p-4 border border-[#333]"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="w-full md:w-1/4">
                                                <ComicCard
                                                    comic={item}
                                                    showAddToCart={false}
                                                />
                                            </div>

                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                                    {item.isRare && (
                                                        <span className="inline-block bg-yellow-500 text-black text-xs px-2 py-1 rounded-md mt-1">
                                                            RARE COMIC
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex justify-between items-end mt-4">
                                                    <div className="flex items-center gap-4">
                                                        <button
                                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                            className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-[#333] transition-colors"
                                                        >
                                                            -
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button
                                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                            className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-[#333] transition-colors"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <div className="text-right">
                                                        <p className="text-[#B5F684] text-xl font-bold">
                                                            ${(item.prices[0].price * item.quantity).toFixed(2)}
                                                        </p>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="text-sm flex items-center gap-1 mt-1 hover:text-red-400 transition-colors"
                                                        >
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
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6 sticky top-6"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Order Summary</h2>
                                {cartItems.length > 0 && (
                                    <button
                                        onClick={clearCart}
                                        className="text-sm text-red-400 hover:underline"
                                    >
                                        Clear cart
                                    </button>
                                )}
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>

                                {/* Cupom de Desconto */}
                                <div className="pt-4 border-t border-[#333]">
                                    <label className="block mb-2">Coupon Code</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={coupon}
                                            onChange={(e) => {
                                                setCoupon(e.target.value.toUpperCase());
                                                setError("");
                                            }}
                                            className="flex-1 bg-[#0A0A0A] border border-[#333] rounded-md px-4 py-2 focus:border-[#B5F684] focus:outline-none"
                                            placeholder="Enter coupon"
                                        />
                                        <button
                                            onClick={handleApplyCoupon}
                                            className="bg-[#B5F684] text-black px-4 py-2 rounded-md hover:bg-[#CCF8AB] transition-colors"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {error && (
                                        <p className="text-red-500 text-sm mt-1">{error}</p>
                                    )}
                                    {appliedCoupon && (
                                        <div className="flex justify-between items-center mt-1">
                                            <p className="text-green-500 text-sm">
                                                Applied: {appliedCoupon.code} (-{(appliedCoupon.discount * 100)}%)
                                            </p>
                                            <button
                                                onClick={() => {
                                                    applyCoupon("");
                                                    setCoupon("");
                                                }}
                                                className="text-xs text-gray-400 hover:text-white"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-4 border-t border-[#333]">
                                    <div className="flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>${(subtotal - discount).toFixed(2)}</span>
                                    </div>
                                </div>

                                <Link
                                    to={cartItems.length > 0 ? "/checkout" : "#"}
                                    className="block w-full text-center bg-gradient-to-r from-[#CCF8AB] to-[#B5F684] text-black py-3 px-6 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50"
                                >
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}