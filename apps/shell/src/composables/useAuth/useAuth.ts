import { useUserStore } from "src/stores/user";
import { eventBus, api, apiEndpoints, isApiError, getErrorMessage } from "@devfoji/shared";
import type { User, AuthToken } from "@devfoji/shared";
import type { LoginBody, RegisterBody } from "src/types/auth";
import { computed } from "vue";

export function useAuth() {
    const userStore = useUserStore()

    const isAuth = computed(() => !!userStore.user)

    const login = async (body: LoginBody) => {
        try {
            const resp: AuthToken = await api.post(apiEndpoints.loginUrl, body)
            
            if (resp.accessToken) {
                await userStore.getUserInfo()

                if (userStore.user?.id) {
                    eventBus.emit('auth:login', { user: userStore.user })
                }
            }
        } catch(err) {
            console.log(err)
            if (isApiError(err)) {
                return getErrorMessage(err)
            }
        }
    }

    const logout = async () => {
        try {
            const resp: { success: boolean } = await api.post(apiEndpoints.logoutUrl)

            if (resp.success) {
                userStore.clearUserInfo()
                eventBus.emit('auth:logout', null)
            }
        } catch(err) {
            console.log(err)
            if (isApiError(err)) {
                return getErrorMessage(err)
            }
        }
    }

    const register = async (body: RegisterBody) => {
        try {
            const resp: User = await api.post(apiEndpoints.registerUrl, body)

            if (resp.id) {
                await login({
                    email: body.email,
                    password: body.password
                })
            }
        } catch(err) {
            console.log(err)
            if (isApiError(err)) {
                return getErrorMessage(err)
            }
        }
    }

    return {
        user: userStore.user,
        isAuth,
        login,
        logout,
        register
    }
}
