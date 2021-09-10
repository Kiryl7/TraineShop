export function cartReducer(state: {
    cartItems: never[];
    shippingAddress: {};
} | undefined, action: any): {
    cartItems: any[];
    shippingAddress: {};
} | {
    shippingAddress: any;
    cartItems: never[];
} | {
    paymentMethod: any;
    cartItems: never[];
    shippingAddress: {};
};
