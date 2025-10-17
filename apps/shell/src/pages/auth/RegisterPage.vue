<script setup lang="ts">
import AuthFormHeader from 'src/components/auth/authFormHeader/AuthFormHeader.vue';
import RegisterForm from 'src/components/auth/registerForm/RegisterForm.vue';
</script>

<template>
     <q-page class="row items-center justify-center">
        <div class="bg-white rounded-borders q-pa-xl column col-xs-12 col-sm-6 col-md-4">
            <AuthFormHeader
                title="Get Started"
                subtitle="Create your free DevFoji account"
            />
            <RegisterForm />
            <p class="q-mt-md text-sm column justify-center items-center q-gutter-xs">
                <span>Already have an account?</span>
                <q-btn
                    to="/auth/login"
                    label="Log in"
                    size="md"
                    color="primary"
                    flat
                />
            </p>
        </div>
    </q-page>
</template>
