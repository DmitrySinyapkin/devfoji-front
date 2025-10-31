<script setup lang="ts">
import { useUserStore } from 'src/stores/user';

const userStore = useUserStore()
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div>{{ userStore.user }}</div>
  </q-page>
</template>
