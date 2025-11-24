import type { App } from "vue"

export interface AppModule {
    mount: (el: HTMLElement) => App
}

export type RemoteApp = Record<string, () => Promise<AppModule>>
