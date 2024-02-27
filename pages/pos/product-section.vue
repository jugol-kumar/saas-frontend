<script>


import {useToast} from "vue-toastification";
import SearchSelect from "~/components/SearchSelect.vue";
import {useCartStore} from "~/stores/useCartStore.js";

const toast = useToast()
const cartStore = useCartStore();
const addedToCart = (product) => cartStore.addToCart({...product, 'buyQty': 1})



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

</script>



<template>
  <div>
    <div v-if="products?.data.length < 1 && !pending">
      <h2>Product Not Found...</h2>
    </div>
    <div v-if="pending">
      <h2>Pending....</h2>
    </div>
    <div class="row" v-else>
      <ProductCard @setToCart="addedToCart" :info="item" v-for="item in products?.data"/>
    </div>
    <Pagination :pagination="products" @changePage="setPage"/>
  </div>
</template>