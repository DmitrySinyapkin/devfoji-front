import { setAppConfig } from "@devfoji/shared";
import { defineBoot } from '#q-app/wrappers'

export default defineBoot(() => {
    setAppConfig({
        apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api'
    })
})
