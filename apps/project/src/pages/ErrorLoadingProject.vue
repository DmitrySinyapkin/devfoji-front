<script setup lang="ts">
import { useHostRouter } from '@devfoji/shared';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const { navigateTo } = useHostRouter()

const retry = async () => {
    const projectId = route.params.projectId as string
    await router.push(`/projects/${projectId}`)
}

const returnToDashboard = () => {
    navigateTo('/dashboard')
}
</script>

<template>
    <q-page class="q-pa-lg text-center column items-center justify-center">
        <q-icon name="warning" size="xl" color="warning" />
        <div class="q-mt-md">Error loading project data</div>
        <div class="row justify-center q-gutter-md">
            <q-btn 
                label="Retry" 
                @click="retry" 
                class="q-mt-sm"
                color="primary"
            />
            <q-btn 
                label="Return to dashboard" 
                @click="returnToDashboard" 
                class="q-mt-sm"
                color="primary"
            />
        </div>
    </q-page>
</template>
