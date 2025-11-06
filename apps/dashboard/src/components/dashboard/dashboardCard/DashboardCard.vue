<script setup lang="ts">
import type { DashboardCardData } from 'src/composables/useDashboardData/types';
import CardWithLink from 'src/components/ui/cardWithLink/CardWithLink.vue';

const {
    icon,
    title,
    counter,
    additionalText = '',
    to
} = defineProps<DashboardCardData>()
</script>

<template>
    <CardWithLink :to="to">
        <q-card-section>
            <q-icon :name="icon" size="xl" class="bg-grey-4"></q-icon>
        </q-card-section>
        <q-card-section>
            <div class="text-h6">{{ title }}</div>
            <div class="text-h4">{{ counter }}</div>
            <div v-if="additionalText">{{ additionalText }}</div>
        </q-card-section>
    </CardWithLink>
</template>
