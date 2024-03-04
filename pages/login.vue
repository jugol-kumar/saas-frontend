
<script setup >

  import {useToast} from "vue-toastification";

  definePageMeta({
    layout: false,
    middleware: ['guest']
  })

  const { setToken, setAuthUser } = useTokenStore();
  const toast = useToast();
  const from = ref({
    email: "customer@customer.com",
    password: "12345678",
    remember: false
  })


  const isPending = ref(false)
  const errors = ref(null)

  const {login, fetchUser} = useAuthStore();
  const handelLogin = async () => {
    isPending.value = true;
    const {data, pending, error} = await login(from.value)
    isPending.value = pending.value
    errors.value = error

    if(error?.value) toast.error(error?.value.message)

    if (!error.value){
      setToken(data.value)
      const userData = await fetchUser();
      setAuthUser(userData?.data?.value)

      if(userData.data.value.role.includes('Customer')){
        return navigateTo('/dashboard')
      }else{
        return navigateTo('/superadmin')
      }

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
          <div class="form-floating w-100">
            <input v-model="from.email" type="text" class="form-control w-100" id="floatingTextarea">
            <label for="floatingTextarea">Email</label>
          </div>
          <div class="form-floating">
            <input v-model="from.password" type="password" class="form-control" id="floatingTextarea">
            <label for="floatingTextarea">Password</label>
          </div>
          <div class="text-center">
            <Button :is-loading="isPending">Login</Button>
          </div>
        </form>
      </div>
  </div>
</template>