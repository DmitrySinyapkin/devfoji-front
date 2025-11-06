<script setup lang="ts">
import DashboardCard from 'src/components/dashboard/dashboardCard/DashboardCard.vue';
import { useDashboardData } from 'src/composables/useDashboardData/useDashboardData';
import { useUserStore } from 'src/stores/user';

const { dashboardData, totalTasks } = useDashboardData()
const userStore = useUserStore()
</script>

<template>
  <q-page class="q-pa-xl">
    <h3 class="text-h3 q-mb-none">{{ `Hi, ${userStore.user?.name}!` }}</h3>
    <p class="text-subtitle-1 text-grey q-mb-xl">{{ `You have ${totalTasks} task${totalTasks === 1 ? '' : 's'} pending` }}</p>
    <div class="row items-center justify-center q-gutter-md">
      <DashboardCard
        v-for="item in dashboardData"
        :key="item.title"
        :to="item.to"
        :icon="item.icon"
        :title="item.title"
        :counter="item.counter"
        :additional-text="item.additionalText || ''"
      />
    </div>
  </q-page>
</template>
