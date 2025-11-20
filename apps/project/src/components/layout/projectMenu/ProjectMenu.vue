<script setup lang="ts">
import SidebarMenu from 'src/components/ui/sidebar/menu/SidebarMenu.vue';
import type { MenuItem } from 'src/types/menuItem';
import { useProjectStore } from 'src/stores/project';

const projectStore = useProjectStore()

const menuItems: MenuItem[] = [
    {
        label: 'General',
        icon: 'article',
        to: `/projects/${projectStore.project?.id}`
    },
    {
        label: 'Tasks',
        icon: 'check_box',
        to: `/projects/${projectStore.project?.id}/tasks`
    },
    {
        label: 'Team',
        icon: 'account_circle',
        to: `/projects/${projectStore.project?.id}/members`
    },
    {
        label: 'Files',
        icon: 'folder_shared',
        to: `/projects/${projectStore.project?.id}/files`
    },
    {
        label: 'Settings',
        icon: 'settings',
        to: `/projects/${projectStore.project?.id}/settings`
    },
]
</script>

<template>
    <SidebarMenu :items="menuItems" />
</template>
