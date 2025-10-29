import { remoteApps } from "src/config/remoteApps";
import { ref } from "vue";
import type { RemoteAppName, RemoteAppStatus } from "./types";

export function useRemote(name: RemoteAppName) {
    const status = ref<RemoteAppStatus>('loading')

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
            status.value = 'ready'
        } catch (error) {
            console.error('Failed to load dashboard app:', error)
            status.value = 'error'
        }
    }

    const unmountRemoteApp = (target: HTMLElement) => {
        target.innerHTML = ''
    }

    return {
        status,
        mountRemoteApp,
        unmountRemoteApp
    }
}
