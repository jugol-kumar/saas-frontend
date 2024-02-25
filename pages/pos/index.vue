<script setup>

  import {useToast} from "vue-toastification";
  const toast = useToast()

  definePageMeta({
    layout:false,
    middleware:['auth']
  })

  const tab = ref('product')


  const searchProduct = ref('');
  const page = ref(1);
  const perPage = ref(3)

  const { data: products, error:productError, pending } = useLazyAsyncData(
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
      } ), {
        watch: [
          page,
          searchProduct,
          perPage
        ]
      },
  );
  const setPage = (value) => {
    page.value = value
    console.log(value)
  }

  watch(productError, ()=>{
    if(productError?.value){
      toast.error(productError?.value?.data?.message)
    }
  })

  watch(products, (product)=>{
    console.log(product)
  }, {deep:true})

  const skuSearch = (sku) =>{
    console.log(sku)
  }


</script>

<template>
  <div class="p-2 pos">
    <div class="bg-glass-morphi glass-morphi-border p-3 rounded d-flex align-items-center justify-content-between">
      <p>Total Amount: <span class="fw-semibold">560</span></p>
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
          <div class="pos-filter">
            <div class="d-flex align-items-center">
              <input type="text"
                     class="w-100 p-2 rounded glass-morphi-border bg-glass-morphi"
                     v-model="searchProduct"
                     @input="skuSearch($event.target.value)"
                     placeholder="search product" >
              <Icon name="material-symbols:search" size="20" class="ms-n4" />
            </div>
            <div class="d-flex align-items-center justify-content-between py-2">
              <div class="d-flex align-items-center gap-2 py-3">
                <input type="radio" name="category" value="all-category" id="all-category" hidden checked>
                <label for="all-category" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">All Category</label>

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
            <div class="row" v-show="tab === 'service'">
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dignissimos facilis illum laboriosam nam numquam omnis reprehenderit tempore veritatis. A eum eveniet ex ipsam libero omnis optio praesentium, quaerat repudiandae!</h2>
            </div>
          </Transition >
          <Transition name="pos">
            <div v-show="tab === 'product'">
              <div v-if="products?.data.length < 1 && !pending">
                <h2>Product Not Found...</h2>
              </div>
              <div v-if="pending">
                <h2>Pending....</h2>
              </div>
              <div class="row" v-else>
                <ProductCard :info="item" v-for="item in products?.data"/>
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
              <div class="scan glass-morphi-border bg-glass-morphi">
                <p>Scan QR Code</p>
              </div>
            </div>
            <div class="bg-glass-morphi glass-morphi-border rounded mt-4 overflow-hidden p-1 blur-bg">
              <table class="w-100 overflow-y-scroll">
                <thead>
                <tr>
                  <th class="p-2">NAME</th>
                  <th class="p-2">QTY</th>
                  <th class="p-2">TAX</th>
                  <th class="p-2">PRICE</th>
                  <th class="p-2">SUB TOTAL</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="p-2">
                    <div class="d-flex align-items-center gap-2">
                      <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="width-40px height-40px rounded" alt="">
                      <h4 class="fs-6">Apple Watch</h4>
                    </div>
                  </td>
                  <td class="p-2">
                    qty
                  </td>
                  <td class="p-2">
                    <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span>
                  </td>
                  <td class="p-2">$56</td>
                  <td class="p-2">$61</td>
                  <td class="p-2">
                    <span class="delete">
                    <Icon name="material-symbols:delete-outline"/>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <div class="d-flex align-items-center gap-2">
                      <img src="/images/product.png" class="width-40px height-40px rounded" alt="">
                      <h4 class="fs-6">Apple Watch</h4>
                    </div>
                  </td>
                  <td class="p-2">
                    qty
                  </td>
                  <td class="p-2">
                    <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span>
                  </td>
                  <td class="p-2">$56</td>
                  <td class="p-2">$61</td>
                  <td class="p-2">
                    <span class="delete">
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
              <h3 class="fs-5">Sub Total: $0.00</h3>
              <h4 class="fs-6">Total: $0.00</h4>
              <button class="glass-morphi-button mt-3">Empty Cart</button>
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
  filter: blur(1rem);
}
</style>