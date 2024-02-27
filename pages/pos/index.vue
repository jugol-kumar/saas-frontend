<script setup>

  import {useToast} from "vue-toastification";
  import SearchSelect from "~/components/SearchSelect.vue";
  const toast = useToast()

  definePageMeta({
    layout:false,
    middleware:['auth']
  })

  const tab = ref('product');
  console.log(tab.value);

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

  watch(products, (product)=>{
    console.log(product)
  }, {deep:true})

  const skuSearch = (sku) =>{
    console.log(sku)
  }
</script>

<template>
  <div class="p-2 pos" style="max-height: 100vh;overflow: hidden">
    <div class="bg-glass-morphi glass-morphi-border p-3 rounded d-flex align-items-center justify-content-between">
      <p>Total Amount: <span class="fw-semibold">560</span></p>
      <div class="d-flex align-items-center gap-3">
        <button class="d-flex align-items-center gap-2 text-white bg-glass-morphi glass-morphi-border py-1 px-3 rounded-4 pe-2 primary-bg-hover">
          Close Terminal
          <Icon name="material-symbols:close-rounded" size="20" />
        </button>
        <NuxtLink to="/dashboard" class="bg-glass-morphi py-1 px-3 pe-2 rounded-5 d-flex gap-2 align-items-center justify-content-center glass-morphi-border primary-bg-hover">
          Dashboard
          <Icon name="material-symbols:android-google-home" size="20" class="icon" />
        </NuxtLink>
      </div>
    </div>
    <div class="mt-3">
      <div class="row">
        <div class="col-lg-8">
          <SearchSelect/>
          <div class="pos-filter">
<!--            <div class="d-flex align-items-center">-->
<!--              <input type="text"-->
<!--                     class="w-100 p-2 rounded glass-morphi-border bg-glass-morphi"-->
<!--                     v-model="searchProduct"-->
<!--                     @input="skuSearch($event.target.value)"-->
<!--                     placeholder="search product" >-->
<!--              <Icon name="material-symbols:search" size="20" class="ms-n4" />-->
<!--            </div>-->
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
            <div class="row" v-if="tab === 'service'">
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dignissimos facilis illum laboriosam nam numquam omnis reprehenderit tempore veritatis. A eum eveniet ex ipsam libero omnis optio praesentium, quaerat repudiandae!</h2>
            </div>
          </Transition >
          <Transition name="pos">
            <div v-if="tab === 'product'" class="d-flex flex-column justify-content-between" style="height: 70vh">
              <div v-if="products?.data.length < 1 && !pending">
                <h2>Product Not Found...</h2>
              </div>
              <div v-if="pending">
                <h2>Pending....</h2>
              </div>
              <div class="row row-cols-5" v-else>
                <ProductCard :info="item" v-for="item in products?.data"/>
              </div>
              <Pagination :pagination="products" @changePage="setPage"/>
            </div>
          </Transition>
        </div>

        <div class="col-lg-4 d-flex flex-column justify-content-between" style="height: 85vh;">
          <div >
            <div class="d-flex align-items-center mb-4">
              <button class="bg-glass-morphi glass-morphi-border glass-morphi-button d-flex align-items-center gap-1 rounded-5" style="font-size: 14px;">
                Add New Product
              <Icon name="material-symbols:add" class="icon" size="20" />
              </button>
              <button class="ms-2 bg-glass-morphi glass-morphi-border glass-morphi-button d-flex align-items-center gap-2 rounded-5" style="font-size: 14px;">
                <p>Scan QR Code</p>
                <Icon name="material-symbols:camera" class="icon" size="20" />
              </button>
              <button class="ms-2 bg-glass-morphi glass-morphi-border glass-morphi-button d-flex align-items-center gap-2 rounded-5 ps-3" style="font-size: 14px;">
                <Icon name="material-symbols-light:back-hand-outline-rounded" class="icon" size="20"  />
                Hold
              </button>
            </div>
            <div class=" mt-4 overflow-hidden blur-bg overflow-y-scroll mb-3" style="max-height: 55vh">
              <div class="bg-glass-morphi glass-morphi-border rounded d-flex gap-3 p-2 mb-3">
                <div class="w-20">
                  <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="w-100 h-100 rounded">
                </div>
                <div class="w-80">
                  <p>Apple Watch</p>
                  <div class="d-flex align-items-center justify-content-between w-100 py-1">
                    <p>Price: $56</p>
                    <p style="font-size: 14px">Tax: <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span></p>
                    <p style="font-size: 14px">Sub Total: $61</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="text-white">
                      qty counter..
                    </div>
                      <span class="primary-icon-button">
                        <Icon name="material-symbols:delete-outline"/>
                      </span>
                  </div>
                </div>
              </div>
              <div class="bg-glass-morphi glass-morphi-border rounded d-flex gap-3 p-2 mb-3">
                <div class="w-20">
                  <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="w-100 h-100 rounded">
                </div>
                <div class="w-80">
                  <p>Apple Watch</p>
                  <div class="d-flex align-items-center justify-content-between w-100 py-1">
                    <p>Price: $56</p>
                    <p style="font-size: 14px">Tax: <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span></p>
                    <p style="font-size: 14px">Sub Total: $61</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="text-white">
                      qty counter..
                    </div>
                    <span class="primary-icon-button">
                        <Icon name="material-symbols:delete-outline"/>
                      </span>
                  </div>
                </div>
              </div>
              <div class="bg-glass-morphi glass-morphi-border rounded d-flex gap-3 p-2 mb-3">
                <div class="w-20">
                  <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="w-100 h-100 rounded">
                </div>
                <div class="w-80">
                  <p>Apple Watch</p>
                  <div class="d-flex align-items-center justify-content-between w-100 py-1">
                    <p>Price: $56</p>
                    <p style="font-size: 14px">Tax: <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span></p>
                    <p style="font-size: 14px">Sub Total: $61</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="text-white">
                      qty counter..
                    </div>
                    <span class="primary-icon-button">
                        <Icon name="material-symbols:delete-outline"/>
                      </span>
                  </div>
                </div>
              </div>
              <div class="bg-glass-morphi glass-morphi-border rounded d-flex gap-3 p-2 mb-3">
                <div class="w-20">
                  <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="w-100 h-100 rounded">
                </div>
                <div class="w-80">
                  <p>Apple Watch</p>
                  <div class="d-flex align-items-center justify-content-between w-100 py-1">
                    <p>Price: $56</p>
                    <p style="font-size: 14px">Tax: <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span></p>
                    <p style="font-size: 14px">Sub Total: $61</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="text-white">
                      qty counter..
                    </div>
                    <span class="primary-icon-button">
                        <Icon name="material-symbols:delete-outline"/>
                      </span>
                  </div>
                </div>
              </div>
              <div class="bg-glass-morphi glass-morphi-border rounded d-flex gap-3 p-2 mb-3">
              <div class="w-20">
                <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="w-100 h-100 rounded">
              </div>
              <div class="w-80">
                <p>Apple Watch</p>
                <div class="d-flex align-items-center justify-content-between w-100 py-1">
                  <p>Price: $56</p>
                  <p style="font-size: 14px">Tax: <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span></p>
                  <p style="font-size: 14px">Sub Total: $61</p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="text-white">
                    qty counter..
                  </div>
                  <span class="primary-icon-button">
                        <Icon name="material-symbols:delete-outline"/>
                      </span>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div>
            <div class="bg-glass-morphi glass-morphi-border rounded d-flex justify-content-between p-4 blur-bg">
              <div>
                <div class="d-flex gap-2">
              <span class="p-2 glass-morphi-border bg-glass-morphi rounded d-flex align-items-center justify-content-center">
                <Icon name="ph:currency-dollar-simple-thin" />
              </span>
                  <input type="number" class="p-2 glass-morphi-border shadow rounded" placeholder="Discount">
                </div>
                <button class="primary-button mt-3 fs-6  px-2 py-1" data-bs-toggle="modal" data-bs-target="#pos-invoice">PAY</button>
              </div>
              <div class="d-flex flex-column align-items-end">
                <h3 class="fs-6 mb-1">Sub Total: $0.00</h3>
                <h4 class="fs-6">Total: $0.00</h4>
                <button class="glass-morphi-button mt-3 fs-6 px-2 py-1">Empty Cart</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <Modal id="pos-invoice" title="Pos Invoice" size="xl">

    <div class="d-flex align-items-center justify-content-between">
      <div>
        <h1 class="mb-2">Takar Hisab</h1>
        <strong class="text-white">#234567</strong>
        <p><strong class="text-white">Date:</strong> 2024-02-05</p>
        <strong class="text-white">Billed To: Walk-In Customer</strong>
      </div>
      <div>
        <strong class="text-white">Shipped:</strong>
      </div>
      <div class="w-30">
        <p class="text-end mb-4"><strong>Store Name: </strong>The Treasure</p>
          <strong class="text-white d-block">From:</strong>
          <strong class="text-white">Rajodiya Infotech 3726 Clay Lick Road, Longmont,Colorado, New Zealand,80501</strong>
      </div>
    </div>

    <div class="mt-4">
      <table class="w-100">
        <thead>
        <tr class="bg-glass-morphi">
          <th class="p-2">ITEMS	</th>
          <th class="p-2">QUANTITY</th>
          <th class="p-2">PRICE</th>
          <th class="p-2">TAX</th>
          <th class="p-2">TOTAL</th>
        </tr>
        </thead>
        <tr>
          <td>Apple Watch</td>
          <td>1</td>
          <td>500</td>
          <td>-</td>
          <td>500</td>
        </tr>
      </table>
    </div>

    <div class="mt-5">
      <NuxtLink to="/pos/print-invoice"  class="primary-button">Cash Payment</NuxtLink>
    </div>

  </Modal>
</template>




<style>
.pos-enter-active,
.pos-leave-active {
  transition: all 0.3s ease-out;
}
.pos-enter-from,
.pos-leave-to {
  opacity: 0;
  filter: blur(15px);
  display: none;
}
</style>