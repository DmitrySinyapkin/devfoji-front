import type { RemoteApp } from "src/types/remoteApps"

export const remoteApps: RemoteApp = {
    dashboard: () => import('dashboard/DashboardApp')
}
