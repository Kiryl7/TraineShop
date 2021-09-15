export function userLoginReducer(state: {} | undefined, action: any): {}
export function userRegisterReducer(state: {} | undefined, action: any): {}
export function userDetailsReducer(
  state:
    | {
        user: {}
      }
    | undefined,
  action: any
):
  | {
      user: {}
    }
  | {
      loading: boolean
      user: any
      error?: undefined
    }
  | {
      loading: boolean
      error: any
      user?: undefined
    }
export function userUpdateProfileReducer(state: {} | undefined, action: any): {}
export function userListReducer(
  state:
    | {
        users: never[]
      }
    | undefined,
  action: any
):
  | {
      users: never[]
    }
  | {
      loading: boolean
      users?: undefined
      error?: undefined
    }
  | {
      loading: boolean
      users: any
      error?: undefined
    }
  | {
      loading: boolean
      error: any
      users?: undefined
    }
export function userDeleteReducer(state: {} | undefined, action: any): {}
export function userUpdateReducer(
  state:
    | {
        user: {}
      }
    | undefined,
  action: any
):
  | {
      user: {}
    }
  | {
      loading: boolean
      success?: undefined
      error?: undefined
    }
  | {
      loading: boolean
      success: boolean
      error?: undefined
    }
  | {
      loading: boolean
      error: any
      success?: undefined
    }
