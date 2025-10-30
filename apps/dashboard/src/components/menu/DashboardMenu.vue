<script setup lang="ts">
const items = [
    {
        label: 'Dashboard',
        icon: 'dashboard',
        to: '/'
    },
    {
        label: 'Projects',
        icon: 'folder',
        to: '/projects'
    },
    {
        label: 'Tasks',
        icon: 'check_box',
        to: '/tasks'
    },
    {
        label: 'Calendar',
        icon: 'calendar_today',
        to: '/calendar'
    },
]
</script>

<template>
    <q-list>
        <q-item
            v-for="item in items"
            :key="item.label"
            :to="item.to"
            exact
        >
            <q-item-section avatar><q-icon :name="item.icon"></q-icon></q-item-section>
            <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
    </q-list>
</template>
