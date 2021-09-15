export function productListReducer(
  state:
    | {
        products: never[]
      }
    | undefined,
  action: any
):
  | {
      products: never[]
    }
  | {
      loading: boolean
      products: never[]
      pages?: undefined
      page?: undefined
      error?: undefined
    }
  | {
      loading: boolean
      products: any
      pages: any
      page: any
      error?: undefined
    }
  | {
      loading: boolean
      error: any
      products?: undefined
      pages?: undefined
      page?: undefined
    }
export function productDetailsReducer(
  state:
    | {
        product: {
          reviews: never[]
        }
      }
    | undefined,
  action: any
):
  | {
      product: {
        reviews: never[]
      }
    }
  | {
      loading: boolean
      product: any
      error?: undefined
    }
  | {
      loading: boolean
      error: any
      product?: undefined
    }
export function productDeleteReducer(state: {} | undefined, action: any): {}
export function productCreateReducer(state: {} | undefined, action: any): {}
export function productUpdateReducer(
  state:
    | {
        product: {}
      }
    | undefined,
  action: any
):
  | {
      product: {}
    }
  | {
      loading: boolean
      success?: undefined
      product?: undefined
      error?: undefined
    }
  | {
      loading: boolean
      success: boolean
      product: any
      error?: undefined
    }
  | {
      loading: boolean
      error: any
      success?: undefined
      product?: undefined
    }
export function productReviewCreateReducer(state: {} | undefined, action: any): {}
export function productTopRatedReducer(
  state:
    | {
        products: never[]
      }
    | undefined,
  action: any
):
  | {
      products: never[]
    }
  | {
      loading: boolean
      products: any
      error?: undefined
    }
  | {
      loading: boolean
      error: any
      products?: undefined
    }
