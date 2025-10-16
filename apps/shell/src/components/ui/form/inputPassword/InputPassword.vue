<script setup lang="ts">
import type { Props } from './types';
import { ref } from 'vue';

const model = defineModel<string>()

const {
    label,
    placeholder,
    error,
    disable = false,
    width = '100%'
} = defineProps<Props>()

const show = ref<boolean>(false)

const toogleShow = () => {
    show.value = !show.value
}
</script>

<template>
    <q-input
        v-model="model"
        :type="show ? 'text' : 'password'"
        :label="label"
        :placeholder="placeholder"
        :disable="disable"
        :error="!!error"
        :error-message="error"
        outlined
        :style="{ width: typeof width === 'number' ? `${width}px` : width }"
    >
        <template v-slot:append>
            <q-icon
                :name="show ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="toogleShow"
            ></q-icon>
        </template>
    </q-input>
</template>
