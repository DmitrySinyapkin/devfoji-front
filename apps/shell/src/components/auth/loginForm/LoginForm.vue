<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'src/components/ui/form/inputText/InputText.vue';
import InputPassword from 'src/components/ui/form/inputPassword/InputPassword.vue';
import { useValidate } from 'src/composables/useValidate/useValidate';
import { validationSchema } from './validationSchema';
import { useAuth } from 'src/composables/useAuth/useAuth';
import type { LoginBody } from 'src/types/auth';
import { useRouter } from 'vue-router';

const apiError = ref<string>('')

const router = useRouter()
const { login } = useAuth()

const submit = async (body: LoginBody) => {
    const err = await login(body)

    if (err) {
        apiError.value = err
    } else {
        apiError.value = ''
        await router.push('/dashboard')
    }
}

const { defineField, errors, onValidate } = useValidate(validationSchema, {}, submit)

const [email] = defineField('email')
const [password] = defineField('password')
</script>

<template>
    <q-form
        class="column items-center q-gutter-sm"
        @submit.prevent="onValidate"
    >
        <InputText
            v-model="email"
            type="email"
            label="Email"
            :error="errors.email"
        />
        <InputPassword
            v-model="password"
            label="Password"
            :error="errors.password"
        />
        <q-btn
            type="submit"
            label="Log In"
            color="primary"
        />
        <div
            class="text-caption text-red"
            :style="{ minHeight: '1.6em' }"
        >
            {{ apiError }}
        </div>
    </q-form>
</template>
