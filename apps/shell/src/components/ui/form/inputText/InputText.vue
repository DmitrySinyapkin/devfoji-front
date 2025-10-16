<script setup lang="ts">
import type { Props } from './types';

const model = defineModel<string>()

const {
    type = 'text',
    label,
    placeholder,
    error,
    disable = false,
    width = '100%'
} = defineProps<Props>()
</script>

<template>
    <q-input
        v-model="model"
        :type="type"
        :label="label"
        :placeholder="placeholder"
        :disable="disable"
        :error="!!error"
        :error-message="error"
        outlined
        :style="{ width: typeof width === 'number' ? `${width}px` : width }"
    />
</template>
