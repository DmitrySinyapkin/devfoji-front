<script setup lang="ts">
import DashboardSidebar from 'src/components/sidebar/DashboardSidebar.vue';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <DashboardSidebar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
