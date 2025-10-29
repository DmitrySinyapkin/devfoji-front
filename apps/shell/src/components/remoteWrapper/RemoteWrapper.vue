<script setup lang="ts">
import type { Props } from './types'
import { onMounted, onBeforeUnmount, useTemplateRef } from 'vue'
import { useRemote } from 'src/composables/useRemote/useRemote';
import ErrorRemoteModule from './ErrorRemoteModule.vue';

const { remoteApp } = defineProps<Props>()

const remoteWrapper = useTemplateRef('remoteWrapper')

const { status, mountRemoteApp, unmountRemoteApp } = useRemote(remoteApp)

onMounted(async() => {
  if (remoteWrapper.value) {
    await mountRemoteApp(remoteWrapper.value)
  }
})

onBeforeUnmount(() => {
  if (remoteWrapper.value) {
    unmountRemoteApp()
  }
})
</script>

<template>
  <div ref="remoteWrapper"></div>
  <ErrorRemoteModule v-if="status === 'error'" />
</template>
