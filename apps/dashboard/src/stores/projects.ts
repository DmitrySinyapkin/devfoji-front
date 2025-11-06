import { defineStore } from "pinia";
import { api } from "boot/axios";
import { apiEndpoints, handleApiErrorDefault } from '@devfoji/shared'
import type { Project, Task } from "@devfoji/shared";
import { ref } from "vue";

export const useProjectsStore = defineStore('projects', () => {
    const myProjects = ref<Project[]>([])
    const myTasks = ref<Task[]>([])
    
    const getMyProjects = async () => {
        try {
            const resp: Project[] = await api.get(apiEndpoints.myProjectsUrl)

            if (resp.length) {
                myProjects.value = resp
            }
        } catch(err) {
            console.log(err)
            return handleApiErrorDefault(err)
        }
    }

    const getMyTasks = async () => {
        try {
            const resp: Task[] = await api.get(apiEndpoints.myTasksUrl)

            if (resp.length) {
                myTasks.value = resp
            }
        } catch(err) {
            console.log(err)
            return handleApiErrorDefault(err)
        }
    }

    const getAll = async () => {
        const errorPjojects = await getMyProjects()
        const errorTasks = await getMyTasks()
        return [errorPjojects, errorTasks]
    }
    
    return {
        myProjects,
        myTasks,
        getMyProjects,
        getMyTasks,
        getAll
    }
})
