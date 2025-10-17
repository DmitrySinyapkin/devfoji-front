<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuth } from './composables/useAuth/useAuth';

const { init } = useAuth()

onMounted(async () => {
  await init()
})
</script>
