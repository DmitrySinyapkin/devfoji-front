import axios, { AxiosInstance } from "axios";
import { getAppConfig } from "../config/init";
import { refreshUrl, loginUrl } from "./endpoints";

const baseURL = getAppConfig().apiBaseUrl

export const api: AxiosInstance = axios.create({
    baseURL,
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
            if (originalRequest.url.includes(refreshUrl) || originalRequest.url.includes(loginUrl)) {

            } else {
                await api.post(refreshUrl)
                originalRequest._retry = true
                return instance(originalRequest)
            }
        }
        return Promise.reject(error.response.data) 
    })
})
