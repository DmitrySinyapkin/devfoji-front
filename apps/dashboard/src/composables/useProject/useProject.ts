import type { Project, Task } from "@devfoji/shared";
import { apiEndpoints } from "@devfoji/shared";
import { api } from 'boot/axios'
import { computed, onMounted, ref } from "vue";

export function useProject(project: Project) {
    const tasks = ref<Task[]>([])

    const getProjectTasks = async () => {
        const resp: Task[] = await api.get(apiEndpoints.projecTasksUrl(project.id))
        tasks.value = resp
    }

    const progress = computed(() => tasks.value.length
        ? Math.trunc(tasks.value.filter(task => task.status === 'done').length / tasks.value.length * 100)
        : 0
    )

    onMounted(async () => {
        await getProjectTasks()
    })

    return {
        progress
    }
}
