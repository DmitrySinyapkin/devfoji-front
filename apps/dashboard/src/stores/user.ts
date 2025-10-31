import { defineStore } from "pinia";
import type { User } from "@devfoji/shared";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null)

    const setUser = (data: User | null) => {
        user.value = data
    }

    return {
        user,
        setUser
    }
})
