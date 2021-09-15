export function login(email: any, password: any): (dispatch: any) => Promise<void>
export function logout(): (dispatch: any) => void
export function register(name: any, email: any, password: any): (dispatch: any) => Promise<void>
export function getUserDetails(id: any): (dispatch: any, getState: any) => Promise<void>
export function updateUserProfile(user: any): (dispatch: any, getState: any) => Promise<void>
export function listUsers(): (dispatch: any, getState: any) => Promise<void>
export function deleteUser(id: any): (dispatch: any, getState: any) => Promise<void>
export function updateUser(user: any): (dispatch: any, getState: any) => Promise<void>
