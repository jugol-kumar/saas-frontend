<script setup>
  definePageMeta({
    middleware:['auth']
  })

  import {useToast} from "vue-toastification";
  const toast = useToast();
  const isToggled = ref(false)
  const search = ref('');
  const page = ref(1);
  const perPage = ref(25)
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
<!--        <th scope="col" class="pb-5">TYPE</th>-->
        <th scope="col" class="pb-5">TOTAL AMOUNT</th>
        <th scope="col" class="pb-5">DUE AMOUNT</th>
        <th scope="col" class="pb-5">Status</th>
        <th scope="col" class="pb-5">Order Date</th>
        <th scope="col" class="pb-5">ACTIONS</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order  in data.data">
        <td>
          <span class="primary-red-button d-inline-block">#{{ order?.order_id }}</span>
        </td>
        <td>{{ order?.customer ? order?.customer?.name : 'Walking Customer'}}</td>
<!--        <td>Admin</td>-->
        <td>{{ order?.sub_total }} ৳</td>
        <td>{{ order?.pay_due }} ৳</td>
        <td class="text-capitalize">{{ order?.payment_status }}</td>
        <td>{{ order?.order_date }}</td>
        <td>

          <div class="dropdown">
            <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <Icon name="ph:dots-three-outline-fill"></Icon>
            </button>
            <ul class="dropdown-menu bg-glass-morphi bg-black" aria-labelledby="dropdownMenuButton1">
              <li>
                <NuxtLink :to="`/invoice/${order.id}`" class="dropdown-item d-flex gap-3">
                  <Icon name="mdi:invoice-text-check-outline"></Icon>
                  <span>Show</span>
                </NuxtLink></li>
              <li>

              <li>
                <NuxtLink to="/" class="dropdown-item d-flex gap-3">
                  <Icon name="material-symbols:print-add-outline"></Icon>
                  <span>Print</span>
                </NuxtLink></li>
              </li>

              <li>
                <NuxtLink to="/" class="dropdown-item d-flex gap-3">
                  <Icon name="material-symbols:delete-sweep-rounded"></Icon>
                  <span>Delete</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
<!--
          <div class="position-relative">
            <button class="primary-icon-button bg-glass-morphi glass-morphi-border" @click="isToggled = !isToggled">
              <Icon name="bi:three-dots-vertical" />
            </button>
            <div
                class="invoice-actions bg-glass-morphi glass-morphi-border p-4 d-flex align-items-center gap-3 rounded blur-bg"
                :class="{'invoice-actions&#45;&#45;toggled': isToggled}"
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
          </div>-->
        </td>
      </tr>
      </tbody>
    </table>
    <pagination :pagination="data" @changePage="orderPageChange"/>
  </div>
</template>


<style scoped>

</style>