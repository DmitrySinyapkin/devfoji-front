export const loadRemote = async (remoteModule: string, component?: string) => {
  try {
    console.log(`Loading ${remoteModule}...`);
    const module = await import(/* @vite-ignore */ remoteModule)
    console.log(`${remoteModule} module loaded:`, module)
    
    //return module.default || module
    return component ? module[component] : module.default
  } catch (error) {
    console.error(`Failed to load ${remoteModule}`, error)
    
    return import('pages/ErrorRemoteModule.vue')
  }
}
