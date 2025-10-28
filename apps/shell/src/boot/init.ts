import { defineBoot } from '#q-app/wrappers'
import { useAuth } from 'src/composables/useAuth/useAuth'

export default defineBoot(async () => {
    const { init } = useAuth()
    await init()
})
