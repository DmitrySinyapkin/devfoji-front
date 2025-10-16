<script setup lang="ts">
import AuthFormHeader from 'src/components/auth/authFormHeader/AuthFormHeader.vue';
import LoginForm from 'src/components/auth/loginForm/LoginForm.vue';
</script>

<template>
    <q-page class="row items-center justify-center">
        <div class="bg-white rounded-borders q-pa-xl column col-xs-12 col-sm-6 col-md-4">
            <AuthFormHeader
                title="Welcome Back"
                subtitle="Log in to your DevForji account"
            />
            <LoginForm />
            <p class="q-mt-md text-sm column justify-center items-center q-gutter-xs">
                <span>Don’t have an account?</span>
                <q-btn
                    to="/auth/register"
                    label="Create one"
                    size="md"
                    color="primary"
                    flat
                />
            </p>
        </div>
    </q-page>
</template>
