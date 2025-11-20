<script setup lang="ts">
import { useProject } from 'src/composables/useProject/useProject';

const { project } = useProject()
</script>

<template>
  <q-page class="q-pa-xl">
    <div>{{ project }}</div>
  </q-page>
</template>
