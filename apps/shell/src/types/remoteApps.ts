export interface AppModule {
    mount: (el: HTMLElement) => void
}

export type RemoteApp = Record<string, () => Promise<AppModule>>
