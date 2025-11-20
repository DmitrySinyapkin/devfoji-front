import { eventBus } from "../../eventBus"

export function useHostRouter() {
    const navigateTo = (path: string) => {
        eventBus.emit('router:navigate_to', { path })
    }

    return {
        navigateTo
    }
}
