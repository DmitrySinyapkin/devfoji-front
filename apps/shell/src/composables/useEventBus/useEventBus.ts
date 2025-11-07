import { eventBus, type EventBusEvents } from "@devfoji/shared";
import { useUserStore } from "src/stores/user";
import { onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

export function useEventBus() {
    const userStore = useUserStore()
    const router = useRouter()

    const sendUserData = () => {
        if (userStore.user?.id) {
            eventBus.emit('auth:login', { user: userStore.user })
        }
    }

    const handleRouteChangeFromRemote = async ({ path }: EventBusEvents['router:navigate_to']) => {
        await router.push(path)
    }

    eventBus.on('auth:request_user_info', sendUserData)
    eventBus.on('router:navigate_to', handleRouteChangeFromRemote)

    onBeforeUnmount(() => {
        eventBus.off('auth:request_user_info', sendUserData)
        eventBus.off('router:navigate_to', handleRouteChangeFromRemote)
    })
}
