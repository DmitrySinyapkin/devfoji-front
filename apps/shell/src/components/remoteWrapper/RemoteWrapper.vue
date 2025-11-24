<script setup lang="ts">
import type { Props } from './types'
import { onMounted, onBeforeUnmount, useTemplateRef, watch } from 'vue'
import { useRemote } from 'src/composables/useRemote/useRemote';
import ErrorRemoteModule from './ErrorRemoteModule.vue';

const { remoteApp } = defineProps<Props>()

const remoteWrapper = useTemplateRef('remoteWrapper')

const { status, mountRemoteApp, unmountRemoteApp } = useRemote()

onMounted(async() => {
  if (remoteWrapper.value) {
    await mountRemoteApp(remoteApp, remoteWrapper.value)
  }
})

onBeforeUnmount(() => {
  if (remoteWrapper.value) {
    unmountRemoteApp()
  }
})

watch(() => remoteApp, async () => {
  if (remoteWrapper.value) {
    unmountRemoteApp()
    await mountRemoteApp(remoteApp, remoteWrapper.value)
  }
})
</script>

<template>
  <div ref="remoteWrapper"></div>
  <ErrorRemoteModule v-if="status === 'error'" />
</template>
