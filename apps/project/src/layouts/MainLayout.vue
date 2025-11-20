<script setup lang="ts">
import SidebarComponent from 'src/components/ui/sidebar/SidebarComponent.vue';
import ProjectMenu from 'src/components/layout/projectMenu/ProjectMenu.vue';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <SidebarComponent>
      <ProjectMenu />
    </SidebarComponent>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
