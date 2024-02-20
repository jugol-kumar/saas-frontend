<template>
  <div class="w-100 vh-100 d-flex align-items-center justify-content-center">
      <div class="auth-form">
        <form @submit.prevent="handelLogin" class="w-100">
          <h3>Login</h3>
          <div class="form-floating w-100">
            <input type="text" class="form-control w-100" id="floatingTextarea">
            <label for="floatingTextarea">Email</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingTextarea">
            <label for="floatingTextarea">Password</label>
          </div>
          <button class="primary-button w-100">Login</button>
        </form>
      </div>
  </div>
</template>
<script setup >

// import {useAuthStore} from "~/stores/useAuthStore.js";

import {useAuthStore} from "~/stores/useAuthStore.js";

definePageMeta({
  layout: false
})

//
const from = ref({
  email: "customer@customer.com",
  password: 12345678,
  remember: false
})

const {login, error} = useAuthStore();
const handelLogin = async () => await login({...from.value})



</script>