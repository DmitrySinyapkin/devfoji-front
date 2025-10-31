import type { ApiError } from "./types";

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
