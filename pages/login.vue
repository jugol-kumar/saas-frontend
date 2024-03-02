
<script setup >

  import {useToast} from "vue-toastification";

  definePageMeta({
    layout: false,
    middleware: ['guest']
  })

  const { setToken } = useTokenStore();
  const toast = useToast();
  const from = ref({
    email: "customer@customer.com",
    password: "12345678",
    remember: false
  })


  const isPending = ref(false)
  const errors = ref(null)

  const {login} = useAuthStore();
  const handelLogin = async () => {
    isPending.value = true;
    const {data, pending, error} = await login(from.value)
    isPending.value = pending
    errors.value = error

    if(error?.value) toast.error(error?.value.message)

    if (!error.value){
      setToken(data.value?.token)
      return navigateTo('/dashboard')
    }
    isPending.value = false;

  }



</script>

<template>
  <div class="w-100 vh-100 d-flex align-items-center justify-content-center">
      <div class="auth-form">
        <span class="text-danger">{{ errors?.value?.data?.message }}</span>
        <form @submit.prevent="handelLogin" class="w-100">
          <h3>Login</h3>
          <div class="w-100">
            <label for="email" class="mb-2">Email</label>
            <input v-model="from.email" type="email" class="form-control w-100 p-2" id="email">
          </div>
          <div class="w-100">
            <label for="password" class="mb-2">Password</label>
            <input v-model="from.password" type="password" class="form-control w-100 p-2" id="password">
          </div>
          <div class="text-center">
            <Button :is-loading="isPending">Login</Button>
          </div>
        </form>
      </div>
  </div>
</template>


