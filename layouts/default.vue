<script setup>
const search = ref(null)
const { data: products, error, pending, refresh } = useLazyAsyncData(
    'products',
    () => $fetch( `customer/product`, {
      method: 'GET',
      baseURL: useRuntimeConfig().public.baseUrl,
      params: {
        search: search.value,
      },
      headers:{
        authorization: `Bearer ${useTokenStore().token}`
      }
    }), {
      watch: [
        search,
      ]
    },
);



</script>

<template>
  <div class="d-flex">
    <Sidebar />
    <main class="main min-vh-100 w-100">
      <div class="main-content">
        <Topbar />
          <slot />
      </div>
    </main>
  </div>
</template>