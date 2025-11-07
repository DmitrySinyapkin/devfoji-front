<script setup lang="ts">
import type { Props } from './types';
import { useRouter } from 'vue-router';

const { to } = defineProps<Props>()
const emit = defineEmits(['click'])

const router = useRouter()

const handleClick = async () => {
    if (to) {
        await router.push(to)
    } else {
        emit('click')
    }
}
</script>

<template>
    <q-card bordered :style="{ minWidth: '320px' }">
        <div 
            class="cursor-pointer" 
            v-ripple
            @click="handleClick"
        >
            <slot />
        </div>
    </q-card>
</template>
