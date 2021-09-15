export function listProducts(keyword?: string, pageNumber?: string): (dispatch: any) => Promise<void>
export function listProductDetails(id: any): (dispatch: any) => Promise<void>
export function deleteProduct(id: any): (dispatch: any, getState: any) => Promise<void>
export function createProduct(): (dispatch: any, getState: any) => Promise<void>
export function updateProduct(product: any): (dispatch: any, getState: any) => Promise<void>
export function createProductReview(productId: any, review: any): (dispatch: any, getState: any) => Promise<void>
export function listTopProducts(): (dispatch: any) => Promise<void>
