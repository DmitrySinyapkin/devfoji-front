import { AppConfig } from "../types"

const config: AppConfig = {
    apiBaseUrl: 'http://localhost:3000/api'
}

export const setAppConfig = (newConfig: Partial<AppConfig>) => {
  Object.assign(config, newConfig)
}

export const getAppConfig = (): AppConfig => {
  return config
}
