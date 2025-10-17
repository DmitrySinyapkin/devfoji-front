<script setup lang="ts">
import { useUserStore } from 'src/stores/user';
import UserAvatar from 'src/components/ui/user/userAvatar/UserAvatar.vue';
import AuthUserContextMenu from 'src/components/ui/user/authUserContextMenu/AuthUserContextMenu.vue';
const userStore = useUserStore()
</script>

<template>
    <div class="row justify-center items-center">
        <UserAvatar
            :user="userStore.user!"
        >
            <template #menu>
                <AuthUserContextMenu />
            </template>
        </UserAvatar>
    </div>
</template>
