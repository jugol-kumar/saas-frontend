<script setup>

  import {useToast} from "vue-toastification";
  import SearchSelect from "~/components/SearchSelect.vue";
  import {useCartStore} from "~/stores/useCartStore.js";

  const toast = useToast()
  const cartStore = useCartStore();
  const addedToCart = (product) => cartStore.addToCart({...product, 'buyQty': 1})


  definePageMeta({
    layout:false,
    middleware:['auth']
  })

  const tab = ref('product')


  // products sections
  const searchProduct = ref('');
  const page = ref(1);
  const perPage = ref(3)
  const { data: products, error:productError, pending: productPending } = useLazyAsyncData(
      'products',
      () => $fetch( `customer/product`, {
        method: 'GET',
        baseURL: useRuntimeConfig().public.baseUrl,
        params: {
          page: page.value,
          search: searchProduct.value,
          perPage: perPage.value
        },
        headers:{
          authorization: `Bearer ${useTokenStore().token}`
        }
      }), {
        watch: [
          page,
          searchProduct,
          perPage
        ]
      },
  );
  const setPage = (value) => page.value = value
  watch(productError, ()=>{
    if(productError?.value){
      toast.error(productError?.value?.data?.message)
    }
  })


  // services sections
  const searchPackage = ref('');
  const packagePage = ref(1);
  const pagePerPage = ref(3)
  const { data: packages, error: packageError, pending: packagePending } = useLazyAsyncData(
      'packages',
      () => $fetch( `/customer/service-package`, {
        method: 'GET',
        baseURL: useRuntimeConfig().public.baseUrl,
        params: {
          page: page.value,
          search: searchProduct.value,
          perPage: perPage.value
        },
        headers:{
          authorization: `Bearer ${useTokenStore().token}`
        }
      }), {
        watch: [
          packagePage,
          searchPackage,
          pagePerPage
        ]
      },
  );
  watch(packageError, ()=>{
    if(packageError?.value){
      toast.error(packageError?.value?.data?.message)
    }
  })
  const setServicePage = (value) => packagePage.value = value

</script>

<template>
  <div class="p-2 pos">
    <div class="bg-glass-morphi glass-morphi-border p-3 rounded d-flex align-items-center justify-content-between">
      <p>Total Amount: <span class="fw-semibold">{{ cartStore.getCartTotalPrice }} ৳</span></p>
      <div class="d-flex align-items-center gap-3">
        <NuxtLink to="/" class="bg-glass-morphi width-30px height-30px d-flex align-items-center justify-content-center glass-morphi-border rounded-3 primary-bg-hover">
          <Icon name="material-symbols:android-google-home" size="20" class="icon" />
        </NuxtLink>
        <NuxtLink to="/dashboard" class="d-flex align-items-center gap-2 text-white bg-glass-morphi glass-morphi-border py-1 px-3 rounded-4 pe-2 primary-bg-hover">
          Close Terminal
          <Icon name="material-symbols:close-rounded" size="20" />
        </NuxtLink>
      </div>
    </div>
    <div class="mt-3">
      <div class="row" style="min-height: 100vh">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-md-4">
              <v-select placeholder="Select Customer"/>
            </div>
            <div class="col-md-8">
              <SearchSelect placeholder="Enter Sku / Name / Scan bar code"/>
            </div>
          </div>
          <div class="pos-filter">
            <div class="d-flex align-items-center justify-content-between py-2">

              <div class="d-flex align-items-center gap-2 py-3" v-if="tab === 'product'">
                <input type="radio" name="category" value="all-category" id="all-category" hidden checked>
                <label for="all-category" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">All Category</label>

                <input type="radio" name="category" value="electric" id="electric" hidden>
                <label for="electric" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">Electric</label>

                <input type="radio"  name="category" value="gadget" id="gadget" hidden>
                <label for="gadget" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">Gadget</label>
              </div>

              <div class="d-flex align-items-center gap-2 py-3" v-if="tab === 'service'">
                <input type="radio" name="category" value="all-category" id="all-category" hidden checked>
                <label for="all-category" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">All Services</label>

                <input type="radio" name="category" value="electric" id="electric" hidden>
                <label for="electric" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">Electric</label>

                <input type="radio"  name="category" value="gadget" id="gadget" hidden>
                <label for="gadget" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">Gadget</label>
              </div>


              <div class="d-flex align-items-center justify-content-between">
                <div :class="tab === 'product' ? 'primary-red-button' : 'glass-morphi-border bg-glass-morphi'"
                     class="cursor-pointer w-50  py-1 px-3 rounded-4 text-center text-white"
                     @click="tab = 'product'"
                >
                  Products
                </div>
                <div :class="tab === 'service' ? 'primary-red-button' : 'glass-morphi-border bg-glass-morphi'"
                     class="cursor-pointer ms-2 w-50  py-1 px-3 rounded-4 text-center text-white"
                     @click="tab = 'service'"
                >
                  Services
                </div>
              </div>
            </div>
          </div>
          <Transition  name="pos" >
            <div class="row" v-if="tab === 'service'">
                <div v-if="packages?.data.length < 1 && !packagePending">
                  <h2>Product Not Found...</h2>
                </div>
                <div v-if="packagePending">
                  <h2>Pending....</h2>
                </div>
                <div class="row" v-else>
                  {{ packages }}
                </div>
                <Pagination :pagination="packages" @changePage="setServicePage"/>
            </div>
          </Transition >
          <Transition name="pos">
            <div v-show="tab === 'product'">
              <div v-if="products?.data.length < 1 && !productPending">
                <h2>Product Not Found...</h2>
              </div>
              <div v-if="productPending">
                <h2>Pending....</h2>
              </div>
              <div class="row" v-else>
                <ProductCard @setToCart="addedToCart" :info="item" v-for="item in products?.data"/>
              </div>
              <Pagination :pagination="products" @changePage="setPage"/>
            </div>
          </Transition>
        </div>

        <div class="col-lg-4 d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex align-items-center mb-4">
              <button class="bg-glass-morphi glass-morphi-border glass-morphi-button d-flex align-items-center gap-2 rounded-5">
                Add New Product
              <Icon name="material-symbols:add" class="icon" size="20" />
              </button>
              <button class="ms-2 bg-glass-morphi glass-morphi-border glass-morphi-button d-flex align-items-center gap-2 rounded-5">
                <p>Scan QR Code</p>
                <Icon name="material-symbols:camera" class="icon" size="20" />
              </button>
            </div>


            <div class="bg-glass-morphi glass-morphi-border rounded mt-4 overflow-hidden p-1 blur-bg">
              <table class="w-100 overflow-y-scroll">
                <thead>
                <tr>
                  <th class="p-2">NAME</th>
                  <th class="p-2">QTY</th>
                  <th class="p-2">PRICE</th>
                  <th class="p-2">SUB TOTAL</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartStore.getCartItems">
                    <td class="p-2">
                      <div class="d-flex align-items-center gap-2">
                        <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="width-40px height-40px rounded" alt="">
                        <h4 class="fs-6">{{ item?.name }}</h4>
                      </div>
                    </td>
                    <td class="p-2">
                      {{ item?.buyQty }}
                    </td>
                    <td class="p-2">
                      {{ item?.price }} ৳
                    </td>
                    <td class="p-2">{{ item?.price * item?.buyQty }} ৳</td>
                    <td class="p-2">
                      <span class="delete" @click="cartStore.removeFromCart(item)">
                      <Icon name="material-symbols:delete-outline"/>
                      </span>
                    </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>



          <div class="bg-glass-morphi glass-morphi-border rounded d-flex justify-content-between p-4 blur-bg mt-5">
            <div>
              <div class="d-flex gap-2">
              <span class="p-2 glass-morphi-border bg-glass-morphi rounded d-flex align-items-center justify-content-center">
                <Icon name="ph:currency-dollar-simple-thin" />
              </span>
                <input type="number" class="p-2 glass-morphi-border shadow rounded" placeholder="Discount">
              </div>
              <button class="primary-button mt-3">PAY</button>
            </div>
            <div class="d-flex flex-column align-items-end">
              <h3 class="fs-5">Sub Total: {{ cartStore.getCartTotalPrice }} ৳</h3>
              <h4 class="fs-6">Total: {{ cartStore.getCartTotalPrice }} ৳</h4>
              <button @click="cartStore.clearCart" class="glass-morphi-button mt-3">Empty Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style>
.pos-enter-active,
.pos-leave-active {
  transition: all 0.4s ease-in-out;
}
.pos-enter-from,
.pos-leave-to {
  opacity: 0;
  filter: blur(15px);
}
</style>