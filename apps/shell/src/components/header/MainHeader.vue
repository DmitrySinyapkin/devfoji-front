<script setup lang="ts">
import HeaderTitle from './headerTitle/HeaderTitle.vue';
import HeaderMenu from './headerMenu/HeaderMenu.vue';
</script>

<template>
    <q-header bordered>
        <q-toolbar class="bg-white">
            <HeaderTitle />
            <q-space></q-space>
            <HeaderMenu />
        </q-toolbar>
    </q-header>
</template>
