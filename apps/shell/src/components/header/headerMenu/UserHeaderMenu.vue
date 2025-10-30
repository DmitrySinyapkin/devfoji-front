<script setup lang="ts">
import { useUserStore } from 'src/stores/user';
import UserAvatar from 'src/components/ui/user/userAvatar/UserAvatar.vue';
import AuthUserContextMenu from 'src/components/ui/user/authUserContextMenu/AuthUserContextMenu.vue';
import IconButton from 'src/components/ui/buttons/iconButton/IconButton.vue';
const userStore = useUserStore()
</script>

<template>
    <div class="row justify-center items-center q-gutter-xs">
        <!-- TODO: add real chat messages count -->
        <IconButton
            icon="chat_bubble"
            size="sm"
            tooltip-text="Chat"
            badge-text="3"
        />
        <IconButton
            to="/dashboard"
            icon="dashboard"
            size="sm"
            tooltip-text="Dashboard"
        />
        <UserAvatar
            :user="userStore.user!"
        >
            <template #menu>
                <AuthUserContextMenu />
            </template>
        </UserAvatar>
    </div>
</template>
