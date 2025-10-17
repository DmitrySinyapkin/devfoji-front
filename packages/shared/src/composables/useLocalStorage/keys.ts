export const localStorageKeys = {
    isAuth: 'is_auth'
} as const

export type LocalStorageKey = (typeof localStorageKeys)[keyof typeof localStorageKeys]
