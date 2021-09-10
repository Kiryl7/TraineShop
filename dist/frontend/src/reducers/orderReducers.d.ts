export function orderCreateReducer(state: {} | undefined, action: any): {};
export function orderDetailsReducer(state: {
    loading: boolean;
    orderItems: never[];
    shippingAddress: {};
} | undefined, action: any): {
    loading: boolean;
    orderItems: never[];
    shippingAddress: {};
} | {
    loading: boolean;
    order: any;
    error?: undefined;
} | {
    loading: boolean;
    error: any;
    order?: undefined;
};
export function orderPayReducer(state: {} | undefined, action: any): {};
export function orderDeliverReducer(state: {} | undefined, action: any): {};
export function orderListMyReducer(state: {
    orders: never[];
} | undefined, action: any): {
    orders: never[];
} | {
    loading: boolean;
    orders?: undefined;
    error?: undefined;
} | {
    loading: boolean;
    orders: any;
    error?: undefined;
} | {
    loading: boolean;
    error: any;
    orders?: undefined;
};
export function orderListReducer(state: {
    orders: never[];
} | undefined, action: any): {
    orders: never[];
} | {
    loading: boolean;
    orders?: undefined;
    error?: undefined;
} | {
    loading: boolean;
    orders: any;
    error?: undefined;
} | {
    loading: boolean;
    error: any;
    orders?: undefined;
};
