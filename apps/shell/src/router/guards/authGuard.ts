import { useAuth } from "src/composables/useAuth/useAuth";
import type { Router } from "vue-router";

export const addAuthGuard = (router: Router) => {
    const { isAuth } = useAuth()

    router.beforeEach((to) => {
        if (!to.meta.public && !to.path.includes('login') && !isAuth.value) {
            return '/auth/login' 
        }
    })
}
