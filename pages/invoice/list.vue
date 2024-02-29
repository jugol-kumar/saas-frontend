<script setup>
  definePageMeta({
    middleware:['auth']
  })

  import {useToast} from "vue-toastification";
  const toast = useToast();
  const isToggled = ref(false)
  const search = ref('');
  const page = ref(1);
  const perPage = ref(3)
  const orderPageChange = (value) => page.value = value

  const { data, error, pending } = useLazyAsyncData(
      'orders',
      () => $fetch( `/customer/order`, {
        method: 'GET',
        baseURL: useRuntimeConfig().public.baseUrl,
        params: {
          page: page.value,
          search: search.value,
          perPage: perPage.value
        },
        headers:{
          authorization: `Bearer ${useTokenStore().token}`
        }
      }), {
        watch: [
          page,
          search,
          perPage
        ]
      },
  );
  watch(error, ()=>{
    if(error?.value){
      toast.error(error?.value?.data?.message)
    }
  })


</script>

<template>
  <div class="bg-glass-morphi glass-morphi-border d-flex align-items-center justify-content-between p-4 rounded my-4">
    <h3>Invoice Information's</h3>
    <NuxtLink to="/invoice/add" class="primary-button d-flex align-items-center gap-2">
      <Icon name="material-symbols:add" size="20" />
      Add Invoice
    </NuxtLink>
  </div>
  <div v-if="pending">
    <h2>Loading....</h2>
  </div>
  <div v-else class="bg-glass-morphi glass-morphi-border p-3 my-5 rounded">
    <table class="table table-borderless table-responsive">
      <thead>
      <tr>
        <th scope="col" class="pb-5">#ID</th>
        <th scope="col" class="pb-5">NAME</th>
        <th scope="col" class="pb-5">CREATOR</th>
        <th scope="col" class="pb-5">TYPE</th>
        <th scope="col" class="pb-5">TOTAL AMOUNT</th>
        <th scope="col" class="pb-5">DUE AMOUNT</th>
        <th scope="col" class="pb-5">CREATED AT</th>
        <th scope="col" class="pb-5">ACTIONS</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order  in data.data">
        <td>
          <span class="primary-red-button d-inline-block">#{{ order?.order_id }}</span>
        </td>
        <td>Tushar Imran</td>
        <td>Admin</td>
        <td>Custom</td>
        <td>8000</td>
        <td>0</td>
        <td>21 Jan 2024</td>
        <td>
          <div class="position-relative">
            <button class="primary-icon-button bg-glass-morphi glass-morphi-border" @click="isToggled = !isToggled">
              <Icon name="bi:three-dots-vertical" />
            </button>
            <div
                class="invoice-actions bg-glass-morphi glass-morphi-border p-4 d-flex align-items-center gap-3 rounded blur-bg"
                :class="{'invoice-actions--toggled': isToggled}"
            >
              <button class="primary-icon-button">
                <Icon name="material-symbols:download" />
              </button>
              <button class="primary-icon-button">
                <Icon name="material-symbols:visibility-outline" />
              </button>
              <button class="primary-icon-button">
                <Icon name="material-symbols:edit"/>
              </button>
              <button class="primary-icon-button">
                <Icon name="material-symbols:delete-outline"/>
              </button>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <pagination :pagination="data" @changePage="orderPageChange"/>
  </div>
</template>


<style scoped>

</style>