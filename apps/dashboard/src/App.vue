<script setup lang="ts">
import { useAuth } from './composables/useAuth/useAuth';

useAuth()
</script>

<template>
  <router-view />
</template>
