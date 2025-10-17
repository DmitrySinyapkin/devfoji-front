import axios, { AxiosInstance } from "axios";
import { refreshUrl, loginUrl } from "./endpoints";


export const api: AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

const instances = [api]

instances.forEach(instance => {
    instance.interceptors.response.use(function (response) {
        return response.data
    }, async function (error) {
        const originalRequest = error.config
        if (error.response.status === 401) {
            if (![refreshUrl, loginUrl].includes(originalRequest.url)) {
                await api.post(refreshUrl)
                originalRequest._retry = true
                return instance(originalRequest)
            }
        }
        return Promise.reject(error.response.data) 
    })
})
