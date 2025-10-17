import { localStorageKeys } from "./keys";
import type {  LocalStorageKey } from "./keys";

export function useLocalStorage() {
    const setLocalStorageItem = (key: LocalStorageKey, value: string) => {
        localStorage.setItem(key, value)
    }

    const getLocalStorageItem = (key: LocalStorageKey) => {
        return localStorage.getItem(key)
    }

    const removeLocalStorageItem = (key: LocalStorageKey) => {
        localStorage.removeItem(key)
    }

    return {
        localStorageKeys,
        setLocalStorageItem,
        getLocalStorageItem,
        removeLocalStorageItem
    }
}
