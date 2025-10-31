import { eventBus } from "@devfoji/shared";
import { useUserStore } from "src/stores/user";
import { onBeforeUnmount } from "vue";

export function useEventBus() {
    const userStore = useUserStore()

    const sendUserData = () => {
        if (userStore.user?.id) {
            eventBus.emit('auth:login', { user: userStore.user })
        }
    }

    eventBus.on('auth:request_user_info', sendUserData)

    onBeforeUnmount(() => {
        eventBus.off('auth:login', sendUserData)
    })
}
