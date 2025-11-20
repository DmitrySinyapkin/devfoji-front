<script setup lang="ts">
import type { Props } from './types';

const { items } = defineProps<Props>()

const handleItemClick = (item: typeof items[number]) => {
    if (item.click && !item.to) {
        item.click()
    }
}
</script>

<template>
    <q-list>
        <q-item
            v-for="item in items"
            :key="item.label"
            :to="item.to"
            exact
            @click="handleItemClick(item)"
        >
            <q-item-section avatar><q-icon :name="item.icon"></q-icon></q-item-section>
            <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
    </q-list>
</template>
