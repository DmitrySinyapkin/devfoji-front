<script setup lang="ts">
const reload = () => {
    window.location.reload()
}
</script>

<template>
    <q-page class="q-pa-lg text-center column items-center justify-center">
        <q-icon name="warning" size="xl" color="warning" />
        <div class="q-mt-md">Module is currently unavailable</div>
        <q-btn 
        label="Retry" 
        @click="reload" 
        class="q-mt-sm"
        color="primary"
        />
    </q-page>
</template>
