<script setup lang="ts">
import type { Props } from './types';

const {
    user,
    color = 'primary',
    textColor = 'white',
    size = 'md'
} = defineProps<Props>()
</script>

<template>
    <q-avatar 
        :color="color" 
        :text-color="textColor"
        :size="size"
        class="cursor-pointer"
    >
        <img
            v-if="user.avatarUrl"
            :src="user.avatarUrl"
        />
        <span v-else>{{ user.name[0]?.toUpperCase() }}</span>
        <slot name="menu"></slot>
    </q-avatar>
</template>
