<script setup lang="ts">
import ProjectCard from 'src/components/projects/projectCard/ProjectCard.vue';
import { useProjectsStore } from 'src/stores/projects';
import { onMounted } from 'vue';

const projectsStore = useProjectsStore()

onMounted(async () => {
    await projectsStore.getMyProjects()
})
</script>

<template>
    <q-page class="q-pa-xl">
        <h3 class="text-h3 q-mb-none">Projects</h3>
        <p class="text-subtitle-1 text-grey q-mb-xl">Manage and track all your projects in one place</p>
        <div class="row items-center wrap q-gutter-md">
            <ProjectCard
                v-for="project in projectsStore.myProjects"
                :key="project.id"
                :project="project"
            />
        </div>
    </q-page>
</template>
