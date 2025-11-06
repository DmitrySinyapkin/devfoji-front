<script setup lang="ts">
import type { Props } from './types';

const {
    value,
    size  = 'md',
    color = 'dark',
    rounded = true,
    label
} = defineProps<Props>()
</script>

<template>
    <div>
        <div class="row align-center justify-between text-body-2">
            <div class="text-grey">{{ label }}</div>
            <div>{{ `${value}% complete` }}</div>
        </div>
        <q-linear-progress
            :value="value"
            :size="size"
            :color="color"
            :rounded="rounded"
        ></q-linear-progress>
    </div>
</template>
