import { eventBus } from '@devfoji/shared'
import type { Payload } from './types'
import { useUserStore } from 'src/stores/user'
import { onBeforeUnmount, onMounted } from 'vue'

export function useAuth() {
    const userStore = useUserStore()

    const setUserData = (data: Payload) => {
        userStore.setUser(data.user)
    }

    eventBus.on('auth:login', setUserData)

    onMounted(() => {
       eventBus.emit('auth:request_user_info', null) 
    })

    onBeforeUnmount(() => {
        eventBus.off('auth:login', setUserData)
    })
}
