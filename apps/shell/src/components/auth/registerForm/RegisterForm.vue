<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'src/components/ui/form/inputText/InputText.vue';
import InputPassword from 'src/components/ui/form/inputPassword/InputPassword.vue';
import { useValidate } from 'src/composables/useValidate/useValidate';
import { validationSchema } from './validationSchema';
import { useAuth } from 'src/composables/useAuth/useAuth';
import type { RegisterBody } from 'src/types/auth';
import { useRouter } from 'vue-router';

const apiError = ref<string>('')

const router = useRouter()
const { register } = useAuth()

const submit = async (body: RegisterBody) => {
    const err = await register(body)

    if (err) {
        apiError.value = err
    } else {
        apiError.value = ''
        await router.push('/dashboard')
    }
}

const { defineField, errors, onValidate } = useValidate(validationSchema, {}, submit)

const [name] = defineField('name')
const [email] = defineField('email')
const [password] = defineField('password')
const [confirmPassword] = defineField('confirmPassword')
const [agree] = defineField('agree')
</script>

<template>
    <q-form
        class="column items-center q-gutter-sm"
        @submit.prevent="onValidate"
    >
        <InputText
            v-model="name"
            label="User name"
            :error="errors.name"
        />
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
        <InputPassword
            v-model="confirmPassword"
            label="Confirm password"
            :error="errors.confirmPassword"
        />
        <q-checkbox
            v-model="agree"
        >
            <span>
                I agree to the <RouterLink to="/docs/terms">Terms</RouterLink> and <RouterLink to="/docs/policy">Privacy Policy</RouterLink>
            </span>
        </q-checkbox>
        <q-btn
            type="submit"
            label="Create Account"
            color="primary"
            :disable="!agree"
        />
        <div
            class="text-caption text-red"
            :style="{ minHeight: '1.6em' }"
        >
            {{ apiError }}
        </div>
    </q-form>
</template>
