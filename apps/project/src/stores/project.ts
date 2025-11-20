import { defineStore } from "pinia";
import type { Project } from "@devfoji/shared";
import { ref } from "vue";
import { api } from "src/boot/axios";
import { apiEndpoints, handleApiErrorDefault } from "@devfoji/shared";

export const useProjectStore = defineStore('project', () => {
    const project = ref<Project | null>(null)

    const getProject = async (id: string) => {
        try {
            const resp: Project = await api.get(apiEndpoints.projectUrl(id))

            if (resp.id) {
                project.value = resp
            }
        } catch(err) {
            console.log(err)
            return handleApiErrorDefault(err)
        }
    }

    return {
        project,
        getProject
    }
})
