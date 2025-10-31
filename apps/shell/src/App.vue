<script setup lang="ts">
import { useEventBus } from './composables/useEventBus/useEventBus';

useEventBus()
</script>

<template>
  <router-view />
</template>
