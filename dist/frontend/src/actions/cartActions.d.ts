export function addToCart(id: any, qty: any): (dispatch: any, getState: any) => Promise<void>
export function removeFromCart(id: any): (dispatch: any, getState: any) => void
export function saveShippingAddress(data: any): (dispatch: any) => void
export function savePaymentMethod(data: any): (dispatch: any) => void
