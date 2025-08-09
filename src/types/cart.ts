import type { ComicCardType } from "./comic";


export type CartItem = ComicCardType & {
    quantity: number;
    isRare?: boolean;
};

export type CouponType = {
    code: string;
    discount: number;
    type: 'common' | 'rare';
};

export type CartContextType = {
    items: CartItem[];
    subtotal: number;
    discount: number;
    appliedCoupon?: CouponType;
    addItem: (comic: CartItem) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    applyCoupon: (code: string) => { success: boolean; message: string };
    clearCart: () => void;
};