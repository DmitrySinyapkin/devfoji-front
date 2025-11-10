import axios, { AxiosInstance } from "axios";
import { addInterceptors } from "./utils";

export const createApi = () => {
    const api: AxiosInstance = axios.create({
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    addInterceptors([api])

    if (typeof window !== 'undefined') {
      const global = window as any
      if (!global.__GLOBAL_API__) {
        global.__GLOBAL_API__ = api
      }
    }

    return api
}

export const getApi = () => {
    if (typeof window !== 'undefined') {
      const global = window as any
      if (global.__GLOBAL_API__) {
        return global.__GLOBAL_API__
      }
      return createApi()
    }
}
