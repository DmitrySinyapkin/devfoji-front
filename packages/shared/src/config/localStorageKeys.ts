export const localStorageKeys = {
    isAuth: 'is_auth'
}

export type LocalStorageKey = (typeof localStorageKeys)[keyof typeof localStorageKeys]
