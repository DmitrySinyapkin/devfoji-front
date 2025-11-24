import { remoteApps } from "src/config/remoteApps";
import { ref, type App } from "vue";
import type { RemoteAppName, RemoteAppStatus } from "./types";

export function useRemote() {
    const status = ref<RemoteAppStatus>('loading')
    const app = ref<App | null>(null)

    const loadRemoteModule = async (name: RemoteAppName) => {
        const loader = remoteApps[name]

        if (!loader) {
            throw new Error(`Remote app '${name}' not found in registry`)
        }

        return await loader()
    }

    const mountRemoteApp = async (name: RemoteAppName, target: HTMLElement) => {
        try {
            const remoteModule = await loadRemoteModule(name)
            app.value = remoteModule.mount(target)
            status.value = 'ready'
        } catch (error) {
            console.error(`Failed to load ${name} app:`, error)
            status.value = 'error'
        }
    }

    const unmountRemoteApp = () => {
        if (app.value) {
            app.value.unmount()
            app.value = null
        }
    }

    return {
        status,
        mountRemoteApp,
        unmountRemoteApp
    }
}
