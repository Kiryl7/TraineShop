declare const users: (
  | {
      name: string
      email: string
      password: string
      isAdmin: boolean
    }
  | {
      name: string
      email: string
      password: string
      isAdmin?: undefined
    }
)[]
export default users
