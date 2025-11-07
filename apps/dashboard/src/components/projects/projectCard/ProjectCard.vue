<script setup lang="ts">
import type { Props } from './types';
import CardClickable from 'src/components/ui/cardClickable/CardClickable.vue';
import { apiEndpoints} from '@devfoji/shared';
import { useProject } from 'src/composables/useProject/useProject';
import { useHostRouter } from 'src/composables/useHostRouter/useHostRouter';
import LinearProgress from 'src/components/ui/linearProgress/LinearProgress.vue';

const { project } = defineProps<Props>()

const { progress } = useProject(project)
const { navigateTo } = useHostRouter()

const handleClick = () => {
    navigateTo(apiEndpoints.projectUrl(project.id))
}
</script>

<template>
    <CardClickable @click="handleClick">
        <q-card-section>
            <q-img 
                :src="project.image" 
                placeholder-src="/project_placeholder.jpg"
            ></q-img>
        </q-card-section>
        <q-card-section>
            <div class="text-subtitle-1 q-mb-sm">{{ project.title }}</div>
            <div
                class="text-caption text-grey q-mb-sm"
                :style="{
                    minHeight: '3.4em',
                    display: '-webkit-box',
                    '-webkit-box-orient': 'vertical',
                    '-webkit-line-clamp': 2,
                    lineClamp: 2,
                    overflow: 'hidden'
                }"
            >
                {{ project.description }}
            </div>
            <LinearProgress
                :value="progress"
                label="Progress"
            />
        </q-card-section>
    </CardClickable>
</template>
