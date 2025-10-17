<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuth } from 'src/composables/useAuth/useAuth';

const router = useRouter()
const { logout } = useAuth()

const navigateToSettings = async () => {
    await router.push('/settings')
}

const logoutUser = async () => {
    await logout()
}

const menuItems = [
    {
        label: 'Settings',
        action: navigateToSettings
    },
    {
        label: 'Log out',
        action: logoutUser
    }
]
</script>

<template>
    <q-menu>
        <q-list style="min-width: 100px">
            <q-item
                v-for="item in menuItems"
                :key="item.label"
                @click="item.action"
                clickable 
                v-close-popup
            >
                <q-item-section>{{ item.label }}</q-item-section>
            </q-item>
        </q-list>
    </q-menu>
</template>
