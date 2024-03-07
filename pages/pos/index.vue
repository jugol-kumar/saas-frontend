<script setup>
  import {useToast} from "vue-toastification";
  import SearchSelect from "~/components/SearchSelect.vue";
  import {useCartStore} from "~/stores/useCartStore.js";


  const { $bsModal }= useNuxtApp();

  const toast = useToast()
  const cartStore = useCartStore();
  const addedToCart = (product) => cartStore.addToCart({
      'product_id': product.id,
      'sku':product.sku,
      'type':product.type,
      'price': product.price,
      'name': product.name,
      'quantity': 1
  })
  const packageAddToCart = (packageInfo) => cartStore.addToCart({
      'product_id': packageInfo.id,
      'sku':packageInfo.sku,
      'price': packageInfo.price,
      'name': packageInfo.name,
      'quantity': 1
  })

  let modal = null;
  onMounted(() => {
    // modal = new $bsModal.Modal(document.getElementById('myModal'))
  });
  const openModal = () => modal.show();


  definePageMeta({
    layout:false,
    middleware:['auth']
  })


  const tab = ref('product')
  const customerId = ref(null)
  const payAmount = ref(0)
  const dueAmount = ref(0)
  const discount = ref(0)


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


  const {data:customers, error:customerError, pending:customerPending} = useApiFetch('customer/customers?onlyData=true')

  const getCartItems = computed(()=>{
    return cartStore.cart.sort(function(a, b){
        return a.type === 'product' && b.type !== 'product' ? -1 : 1;
    });
  })


  const orderPending = ref(false)
  const orderData = ref({})
  const saveOrder = async () => {
    if (cartStore.cart.length < 1) {
      toast.error('Your Cart Is Empty...')
    } else {
      const {data, error: orderError, pending} = await useApiFetch('customer/order', {
        method: "POST",
        body: {
          user_id: customerId.value,
          payAmount: payAmount.value,
          dueAmount: dueAmount.value,
          givenDiscount: discount.value,
          order_details: cartStore.cart
        }
      })

      console.log("pending", pending)
      orderPending.value = pending.value ?? true

      if (data.value) {
        toast.success('Order Saved Successfully Done....')
        orderData.value = saveOrder.value
        cartStore.clearCart(false)
        setTimeout(async () => await paymentReceived(data.value?.invoice), 3000)
      }
      watch(orderError, () => {
        if (orderError?.value) {
          toast.error(orderError?.value?.data?.message)
        }
      })
    }
  }

  console.log("pending ref", orderPending)
  //
  async function paymentReceived(ele) {
    window.frames["print_frame"].document.title = document.title;
    window.frames["print_frame"].document.body.innerHTML = ele
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
  }



</script>

<template>
  <div class="p-2 pos" style="max-height: 100vh;overflow: hidden">
    <div class="bg-glass-morphi glass-morphi-border p-3 rounded d-flex align-items-center justify-content-between">
      <p>Total Amount: <span class="fw-semibold">{{ cartStore.getCartTotalPrice }} ৳</span></p>
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
          <div class="row">
            <div class="col-md-4">
              <div v-if="customerPending">
                <h2>Loading Customers......</h2>
              </div>
<!--              <v-select v-else-->
<!--                        placeholder="Select Customer"-->
<!--                        v-model="customerId"-->
<!--                        :options="customers"-->
<!--                        :reduce="item => item.user.id"-->
<!--                        :getOptionLabel="user => user.user.name"/>-->
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
                <div class="row services-detail " v-else>
                  <div class="col-md-4" v-for="(pack, i) in packages?.data" :key="`add-to-cart-service-${i}`">
                    <Package @singlePackage="packageAddToCart" :info="pack"/>
                  </div>
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

              <div class="row row-cols-4" v-else>
                <ProductCard @setToCart="addedToCart" :info="item" v-for="(item, i) in products?.data" :key="`add-to-cart-products-${i}`"/>
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
            <div class="mt-4 overflow-scroll p-1 blur-bg" style="height: 44vh">
              <div
                  v-for="item in cartStore.getCartItems"
                  class="bg-glass-morphi glass-morphi-border rounded d-flex gap-3 p-2 mb-3">
                <div class="w-20">
                  <img src="/public/images/avatar.avif" class="w-100 h-100 rounded">
                </div>
                <div class="w-80">
                  <p>{{ item?.name }}</p>
                  <div class="d-flex align-items-center justify-content-between w-100 py-1">
                    <p>Price: {{ item?.price }} ৳</p>
                    <p style="font-size: 14px">Tax: <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span></p>
                    <p style="font-size: 14px">Sub Total: {{ item?.price * item?.buyQty }} ৳</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="text-white">
                      Quantity : {{ item?.buyQty }}
                    </div>
                    <button class="primary-icon-button" @click="cartStore.removeFromCart(item)">
                        <Icon name="material-symbols:delete-outline"/>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="bg-glass-morphi glass-morphi-border rounded p-4 blur-bg mt-5">
            <div class="d-flex justify-content-between">
              <div>
                <div class="d-flex gap-2">
                <span class="p-2 glass-morphi-border bg-glass-morphi rounded d-flex align-items-center justify-content-center">
                  <Icon name="ph:currency-dollar-simple-thin" />
                </span>
                  <input type="number" v-model="discount" class="p-2 glass-morphi-border shadow rounded" placeholder="Discount">
                </div>
                <div class="d-flex gap-2 my-3">
                  <v-select
                    class="w-100 glass-morphi-border shadow"
                  />
                </div>
              </div>
              <div class="d-flex flex-column align-items-end">
                <p class="fs-6">Sub Total: {{ cartStore.getCartTotalPrice }} ৳</p>
                <p class="fs-6" v-if="discount">Discount: {{ discount }} ৳</p>
                <p class="fs-6" :class="{'border-top' : discount}">Total: {{ cartStore.getCartTotalPrice - discount }} ৳</p>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-3">
              <div>
<!--                <Button @click="saveOrder" :is-loading="orderPending.value">-->
<!--                  <span class="fs-6">Pay And Order</span>-->
<!--                </Button>-->

                <button @click="saveOrder" class="primary-small-button">Pay And Order</button>

              </div>
              <button @click="cartStore.clearCart" class="glass-morphi-small-button">Empty Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>




  <!-- Modal -->
  <div class="modal fade  blur-bg-20" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content bg-glass-morphi glass-morphi-border">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
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
              <tr v-for="(item, i) in getCartItems" :key="`invoice-cart-item-${i}`">
                <td>{{ item?.name }}</td>
                <td>{{ item?.quantity }}</td>
                <td>{{ item?.price }}</td>
                <td>-</td>
                <td>{{ item?.price * item?.quantity }}</td>
              </tr>
            </table>
          </div>

          <div class="mt-5">
            <NuxtLink to="/pos/print-invoice"  class="primary-button">Cash Payment</NuxtLink>
          </div>
        </div>
        <div class="modal-footer">
<!--          <a class="btn btn-secondary" href="javascript:printDiv">Print Receive</a>-->
          <button type="button" class="btn btn-secondary" @click="printDiv">Print Receive</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
  <iframe id="printing-frame" name="print_frame" src="about:blank" style="display:none;"/>

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
  display: none;
}

</style>