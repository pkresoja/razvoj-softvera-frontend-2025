<script lang="ts" setup>
import { ref } from 'vue';

const username = ref<string>('')
const password = ref<string>('')

function doLogin() {
    alert(username.value + ' ' + password.value)
}
</script>

<template>
    <div class="card auth-card">
        <h5 class="card-header">Login Form</h5>
        <div class="card-body">
            <form v-on:submit.prevent="doLogin()">
                <div class="mb-3">
                    <label for="username" class="form-label">Username:</label>
                    <input type="text" class="form-control" id="username" v-model="username">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                </div>
                <button class="btn btn-primary">
                    <i class="fa-solid fa-paper-plane"></i> Submit
                </button>
            </form>
        </div>
    </div>
</template>

<style>
.auth-card {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
</style>