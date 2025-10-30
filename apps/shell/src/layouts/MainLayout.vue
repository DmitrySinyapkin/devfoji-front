<script setup lang="ts">
import MainHeader from 'src/components/header/MainHeader.vue';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <MainHeader />
    </q-header>
    <q-page-container class="overflow-auto">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
