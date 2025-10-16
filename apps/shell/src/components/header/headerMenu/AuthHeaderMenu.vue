<template>
    <div class="row q-gutter-sm">
        <q-btn
            outline
            color="primary" 
            label="Log In" 
            @click="$router.push('/auth/login')"
        >
        </q-btn>
        <q-btn
            color="primary" 
            label="Sign Up" 
            @click="$router.push('/auth/register')"
        >
        </q-btn>
    </div>
</template>
