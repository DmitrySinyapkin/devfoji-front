import { remoteApps } from "src/config/remoteApps";
import { ref } from "vue";
import type { RemoteAppName, RemoteAppStatus } from "./types";

export function useRemote(name: RemoteAppName) {
    const status = ref<RemoteAppStatus>('loading')
    const element = ref<HTMLElement | null>(null)

    const loadRemoteModule = async () => {
        const loader = remoteApps[name]

        if (!loader) {
            throw new Error(`Remote app '${name}' not found in registry`)
        }

        return await loader()
    }

    const mountRemoteApp = async (target: HTMLElement) => {
        try {
            const remoteModule = await loadRemoteModule()
            remoteModule.mount(target)
            element.value = target
            status.value = 'ready'
        } catch (error) {
            console.error('Failed to load dashboard app:', error)
            status.value = 'error'
        }
    }

    const unmountRemoteApp = () => {
        if (element.value) {
            element.value.innerHTML = ''
            element.value = null
        }
    }

    return {
        status,
        mountRemoteApp,
        unmountRemoteApp
    }
}
