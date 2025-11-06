<script setup lang="ts">
import type { Props } from './types';
import { useRouter } from 'vue-router';

const { to } = defineProps<Props>()

const router = useRouter()
</script>

<template>
    <q-card bordered :style="{ minWidth: '320px' }">
        <div 
            class="cursor-pointer" 
            v-ripple
            @click="router.push(to)"
        >
            <slot />
        </div>
    </q-card>
</template>
