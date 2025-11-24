<script setup lang="ts">
import SidebarMenu from 'src/components/ui/sidebar/menu/SidebarMenu.vue';
import type { MenuItem } from 'src/types/menuItem';
import { useProjectStore } from 'src/stores/project';

const projectStore = useProjectStore()

const menuItems: MenuItem[] = [
    {
        label: 'General',
        icon: 'article',
        to: `/${projectStore.project?.id}`
    },
    {
        label: 'Tasks',
        icon: 'check_box',
        to: `/${projectStore.project?.id}/tasks`
    },
    {
        label: 'Team',
        icon: 'account_circle',
        to: `/${projectStore.project?.id}/members`
    },
    {
        label: 'Files',
        icon: 'folder_shared',
        to: `/${projectStore.project?.id}/files`
    },
    {
        label: 'Settings',
        icon: 'settings',
        to: `/${projectStore.project?.id}/settings`
    },
]
</script>

<template>
    <SidebarMenu :items="menuItems" />
</template>
