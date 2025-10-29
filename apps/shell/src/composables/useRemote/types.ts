import type { remoteApps } from "src/config/remoteApps";

export type RemoteAppName = keyof typeof remoteApps

export type RemoteAppStatus = 'loading' | 'ready' | 'error'
