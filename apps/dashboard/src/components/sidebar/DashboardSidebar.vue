<script setup lang="ts">
import DashboardMenu from '../menu/DashboardMenu.vue';
</script>

<template>
    <q-drawer
        class="q-mt-lg q-py-xl"
        :width="200"
        show-if-above
        elevated
    >
        <div class="q-pl-md q-mb-md">
            <q-btn 
                class="bg-dark text-white"
                to="/projects/new"
            >
                <q-icon color="white" left name="add"></q-icon>
                <div>New Project</div>
            </q-btn>
        </div>
        <DashboardMenu />
    </q-drawer>
</template>
