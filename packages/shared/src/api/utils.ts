import type { ApiError } from "./types";
import type { AxiosInstance } from "axios";
import { loginUrl, refreshUrl } from "./endpoints";

export const isApiError = (error: unknown): error is ApiError => {
    if (typeof error !== 'object' || error === null) {
        return false
    }

    const candidate = error as Record<string, unknown>
    
    return (
        typeof candidate.statusCode === 'number' &&
        typeof candidate.error === 'string' &&
        (typeof candidate.message === 'string' || 
         (Array.isArray(candidate.message) && 
          candidate.message.every(item => typeof item === 'string')))
    )
}

export const getErrorMessage = (error: ApiError) => {
    const message = error.message

    return Array.isArray(message)
        ? message.reduce((str, mes, index) => index === 0 ? str + mes : str + ', ' + mes, '')
        : message
}

export const handleApiErrorDefault = (error: unknown) => {
    if (isApiError(error)) {
        return getErrorMessage(error)
    }
    return 'Unknown error'
}

export const addInterceptors = (instances: AxiosInstance[]) => {
    instances.forEach(instance => {
        instance.interceptors.response.use(function (response) {
            return response.data
        }, async function (error) {
            const originalRequest = error.config
            if (error.response.status === 401) {
                if (![refreshUrl, loginUrl].includes(originalRequest.url)) {
                    await instance.post(refreshUrl)
                    originalRequest._retry = true
                    return instance(originalRequest)
                }
            }
            return Promise.reject(error.response.data) 
        })
    })
}
