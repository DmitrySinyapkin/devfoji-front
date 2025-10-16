<script setup lang="ts">
import { useAuth } from 'src/composables/useAuth/useAuth';
import AuthHeaderMenu from './AuthHeaderMenu.vue';
import UserHeaderMenu from './UserHeaderMenu.vue';

const { isAuth } = useAuth()
</script>

<template>
    <div>
        <UserHeaderMenu v-if="isAuth" />
        <AuthHeaderMenu v-else />
    </div>
</template>
