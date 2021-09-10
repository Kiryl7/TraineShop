export function createOrder(order: any): (dispatch: any, getState: any) => Promise<void>;
export function getOrderDetails(id: any): (dispatch: any, getState: any) => Promise<void>;
export function payOrder(orderId: any, paymentResult: any): (dispatch: any, getState: any) => Promise<void>;
export function deliverOrder(order: any): (dispatch: any, getState: any) => Promise<void>;
export function listMyOrders(): (dispatch: any, getState: any) => Promise<void>;
export function listOrders(): (dispatch: any, getState: any) => Promise<void>;
