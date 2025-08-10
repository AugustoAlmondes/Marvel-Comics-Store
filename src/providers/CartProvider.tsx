import { useState, useMemo, useEffect } from 'react';
import type { CartItem, CouponType } from '../types/cart';
import { RARE_COUPONS, COMMON_COUPONS } from '../utils/constants';
import { CartContext } from '../contexts/CartContext';

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>(() => {
        const storedItems = localStorage.getItem("cart-items");
        return storedItems ? JSON.parse(storedItems) : [];
    });

    const [appliedCoupon, setAppliedCoupon] = useState<CouponType | undefined>(() => {
        const storedCoupon = localStorage.getItem("cart-coupon");
        return storedCoupon ? JSON.parse(storedCoupon) : undefined;
    });

    useEffect(() => {
        localStorage.setItem("cart-items", JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        if (appliedCoupon) {
            localStorage.setItem("cart-coupon", JSON.stringify(appliedCoupon));
        } else {
            localStorage.removeItem("cart-coupon");
        }
    }, [appliedCoupon]);

    // Cálculos derivados
    const subtotal = useMemo(
        () => items.reduce((sum, item) => sum + (item.prices[0].price * item.quantity), 0),
        [items]
    );

    const discount = useMemo(() => {
        if (!appliedCoupon) return 0;

        const applicableItems = appliedCoupon.type === 'rare'
            ? items.filter(item => item.isRare)
            : items;

        const applicableAmount = applicableItems.reduce(
            (sum, item) => sum + (item.prices[0].price * item.quantity), 0
        );

        return applicableAmount * appliedCoupon.discount;
    }, [items, appliedCoupon]);

    // Ações do carrinho
    const addItem = (newItem: CartItem) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === newItem.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            }

            return [...prevItems, {
                ...newItem
            }];
        });
    };

    const removeItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
        // Remove cupom se não houver mais itens raros
        if (appliedCoupon?.type === 'rare' && !items.some(item => item.isRare)) {
            setAppliedCoupon(undefined);
        }
    };

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }

        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const applyCoupon = (code: string) => {
        const formattedCode = code.toUpperCase();

        if (RARE_COUPONS.includes(formattedCode)) {
            const hasRareItems = items.some(item => item.isRare);

            if (!hasRareItems) {
                return { success: false, message: 'Rare coupon requires rare comics in cart' };
            }

            setAppliedCoupon({
                code: formattedCode,
                discount: 0.1,
                type: 'rare'
            });


            return { success: true, message: 'Rare coupon applied!' };
        }

        if (COMMON_COUPONS.includes(formattedCode)) {
            setAppliedCoupon({
                code: formattedCode,
                discount: 0.15,
                type: 'common'
            });

            return { success: true, message: 'Common coupon applied!' };
        }

        return { success: false, message: 'Invalid coupon code' };
    };

    const clearCart = () => {
        setItems([]);
        setAppliedCoupon(undefined);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                subtotal,
                discount,
                // total,
                appliedCoupon,
                addItem,
                removeItem,
                updateQuantity,
                applyCoupon,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
