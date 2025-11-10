import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from 'boot/axios'
import { apiEndpoints, type User } from '@devfoji/shared'

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null)

    const getUserInfo = async () => {
        try {
            const resp: User = await api.get(apiEndpoints.getMeUrl)

            if (resp.id) {
                user.value = resp
            }
        } catch(err) {
            console.log(err)
        }
    }

    const clearUserInfo = () => {
        user.value = null
    }

    return {
        user,
        getUserInfo,
        clearUserInfo
    }
})
