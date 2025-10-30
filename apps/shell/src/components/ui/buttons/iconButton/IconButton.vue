<script setup lang="ts">
import type { Props } from './types';

const {
    icon,
    color = 'dark',
    size = 'md',
    tooltipText,
    badgeText,
    to
} = defineProps<Props>()

const emit = defineEmits(['click'])
</script>

<template>
    <q-btn
        :to="to"
        :icon="icon"
        :color="color"
        :size="size"
        flat
        round
        @click="emit('click')"
    >
        <q-badge
            v-if="badgeText"
            color="red"
            floating
            rounded
        >
            {{ badgeText }}
        </q-badge>      
        <q-tooltip
            v-if="tooltipText"
            class="bg-white text-dark shadow-2"
            transition-show="scale"
            transition-hide="scale"
        >
            {{ tooltipText }}
        </q-tooltip>
    </q-btn>
</template>
