import { useProjectsStore } from "src/stores/projects";
import { computed, onMounted } from "vue";
import type { DashboardCardData } from "./types";

export function useDashboardData() {
    const projectsStore = useProjectsStore()

    const totalProjects = computed(() => projectsStore.myProjects.length)
    const totalTasks = computed(() => projectsStore.myTasks.filter(task => ['todo', 'in_progress'].includes(task.status)).length)
    const highPriorityTasks = computed(() => projectsStore.myTasks.filter(task => task.priority === 'high').length)

    const dashboardData = computed<DashboardCardData[]>(() => [
        {
            icon: 'folder',
            title: 'Total Projects',
            counter: totalProjects.value,
            to: '/projects'
        },
        {
            icon: 'check_box',
            title: 'Total Tasks',
            counter: totalTasks.value,
            to: '/tasks',
            additionalText: highPriorityTasks.value ? `${highPriorityTasks.value} high priority` : ''
        }
    ])

    onMounted(async () => {
        await projectsStore.getAll()
    })

    return {
        dashboardData,
        totalProjects,
        totalTasks
    }
}
