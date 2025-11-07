import { eventBus } from "@devfoji/shared";

export function useHostRouter() {
    const navigateTo = (path: string) => {
        eventBus.emit('router:navigate_to', { path })
    }

    return {
        navigateTo
    }
}
