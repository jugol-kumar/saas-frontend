<template>
  <div class="w-100 vh-100 d-flex align-items-center justify-content-center">
      <div class="auth-form">
        <span class="text-white">{{ error?.data }}</span>
        <form @submit.prevent="handelLogin" class="w-100">
          <h3>Login</h3>
          <div class="w-100">
            <label for="email" class="mb-2">Email</label>
            <input v-model="from.email" type="email" class="form-control w-100 p-2" id="floatingTextarea">
          </div>
          <div class="w-100">
            <label for="password" class="mb-2">Password</label>
            <input v-model="from.password" type="password" class="form-control w-100 p-2" id="floatingTextarea">
          </div>
          <div class="text-center">
            <span class="text-white">{{ loading }}</span>
            <Button>Login</Button>
          </div>
        </form>
      </div>
  </div>
</template>
<script setup >
import {useAuthStore} from "~/stores/useAuthStore.js";
import useApi from "~/composables/useApi.js";

definePageMeta({
  layout: false
})


const from = ref({
  email: "customer@customer.com",
  password: "12345678",
  remember: false
})

const {login, error, loading} = useAuthStore();
const handelLogin = async () => await login(from.value)
</script>