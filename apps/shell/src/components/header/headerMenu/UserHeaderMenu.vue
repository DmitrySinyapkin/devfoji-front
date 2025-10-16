<script setup lang="ts">
import { useUserStore } from 'src/stores/user';

const userStore = useUserStore()
</script>

<template>
    <div class="row">
        <q-avatar color="primary" text-color="white">
            <img
                v-if="userStore.user?.avatarUrl"
                :src="userStore.user.avatarUrl"
            />
            <span v-else>{{ userStore.user?.name[0]?.toUpperCase() || 'A' }}</span>
        </q-avatar>
    </div>
</template>
