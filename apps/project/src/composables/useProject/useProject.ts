import { useProjectStore } from "src/stores/project";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useHostRouter } from "@devfoji/shared";

export function useProject() {
    const projectStore = useProjectStore()
    const route = useRoute()
    const router = useRouter()
    const { navigateTo } = useHostRouter()

    onMounted(async() => {
        if (route.params.projectId) {
            const projectId = route.params.projectId as string
            await projectStore.getProject(projectId)

            if (!projectStore.project?.id) {
                await router.push(`/projects/${projectId}/error`)
            }
        } else {
            navigateTo('/dashboard')
        }      
    })

    return {
        project: projectStore.project
    }
}
