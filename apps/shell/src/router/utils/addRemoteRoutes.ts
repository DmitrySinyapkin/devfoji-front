import type { Router, RouteRecordRaw } from 'vue-router';

const addRemoteRoute = (router: Router, route: RouteRecordRaw, hostPath: string) => {
    router.addRoute({ ...route, path: `/${hostPath}/${ route.path.replace('/', '')}` })
}

export const loadRemoteRoutes = async (module: string) => {
  try {
    const remote =  await import(module)
    console.log('loadRemoteRoutes', remote)
    return remote.default || remote.routes || []
  } catch (error) {
    console.error('Failed to load remote routes:', error)
    return []
  }
}

export const addRemoteRoutes = async (router: Router, module: string, hostPath: string) => {
    const remoteRoutes = await loadRemoteRoutes(module)

    if (remoteRoutes.length) {
        (remoteRoutes as RouteRecordRaw[]).forEach(route => addRemoteRoute(router, route, hostPath))
    }
}
