<script setup lang="ts">
import type { Props } from './types';

const {
    title,
    subtitle
} = defineProps<Props>()
</script>

<template>
    <div class="column items-center q-mb-lg">
        <h1 class="q-my-sm text-h4">{{ title }}</h1>
        <p>{{ subtitle }}</p>
    </div>
</template>
