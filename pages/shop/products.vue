<script setup>


  definePageMeta({
    middleware:['auth']
  })

  const search = ref('');
  const page = ref(1);
  const perPage = ref(2)
  const { data: products, error, pending } = useLazyAsyncData(
      'products',
      () => $fetch( `customer/product`, {
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
      } ), {
        watch: [
          page,
          search,
          perPage
        ]
      },

  );


  // const {} = useApiFetch('')


  const productInfo = ref({})



</script>


<template>
  <div class="d-flex align-items-center justify-content-between py-5">
    <h3>All Products</h3>
    <select v-model="perPage">
      <option value="2">2</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  <input type="text" class="form-control w-50" placeholder="Search...." v-model="search">

    <button class="primary-button d-flex align-items-center gap-2" data-bs-toggle="offcanvas" data-bs-target="#addProduct">
      <Icon name="material-symbols:playlist-add-rounded" size="20" /> Add Product
    </button>
  </div>


  <div class="" v-if="pending">
    <h2>Pending.......</h2>
  </div>

  <div class="row" v-else>
    <div class="col-lg-6" v-for="(product, i) in products?.data" :key="`products-${i}`">
      <div class="th-list glass-morphi-border bg-glass-morphi p-3 rounded mb-3">
        <NuxtLink to="" class="th-list-left w-30">
          <img src="/images/placeholder.webp" class="w-100 h-100" alt="">
        </NuxtLink>
        <div class="th-list-right w-65">
          <div class="th-list-right-text">
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                <NuxtLink to="/shop/product-detail">{{ product?.name }}</NuxtLink>
              </h4>
              <span class="primary-button rounded-5 py-1 px-2" style="font-size: 14px;">QTY 5</span>
            </div>

            <div v-if="product.bar_code" class="p-2 bg-white rounded" style="width:max-content">
              <img :src="product.barcode_url" alt="">
            </div>


            <div class="mt-3">
              <p class="d-flex aling-items-center gap-2">PRICE:<span class="fw-bold">{{ product.price }} ৳</span></p>
            </div>

            <div class="d-flex align-items-center justify-content-between pt-3">
              <span class='primary-red-button'>2 sold</span>
              <div class="d-flex align-items-center gap-2">
                <button class="primary-icon-button">
                  <Icon name="ic:outline-remove-red-eye" />
                </button>
                <button class="primary-icon-button">
                  <Icon name="material-symbols:box-edit-outline" />
                </button>
                <button class="primary-icon-button">
                  <Icon name="material-symbols:delete-outline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <Pagination :pagination="products"/>
    <div class="col-sm-12 col-md-7">
      <div class="d-flex align-items-center justify-content-end">
        <ul class="pagination flex p-2  rounded gap-2 border text-white">
          <li
              class="paginate_button page-item"
              v-for="paginations in products?.meta?.last_page"
              :class="{'active' : paginations === products?.meta.current_page}"
              :key="'padingate'+paginations"
          >
            <span @click="page = paginations" class="page-link" v-html="paginations" />
          </li>
        </ul>
      </div>
    </div>
  </div>



<!--  <Pagination :links="products.links" :from="products.from" :to="products.to" :total="products.total"/>-->


  <Offcanvas id="addProduct" title="Add new product" width="700">
    <div class="mb-4">
      <h4 class="fw-semibold mb-4">Main Information</h4>
      <div class="border-2 p-3 rounded">
        <div class="mb-3">
          <label for="product-name" class="text-white d-block mb-1">Product Name</label>
          <input type="text" class="p-2 border rounded w-100" placeholder="Enter Product Name.. " >
        </div>
        <div class="mb-3">
          <label for="product-category" class="text-white d-block mb-1">Product Category</label>
          <v-select />
        </div>
        <div>
          <label for="product-price" class="text-white d-block mb-1">Price</label>
          <div class="d-flex align-items-center gap-3">
            <input type="number" class="p-2 border rounded" placeholder="$..">
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4">
      <h4 class="mb-3">Product Image</h4>
      <div class="border p-5 rounded"></div>
    </div>
    <div>
      <h4 class="mb-3">About Product</h4>
      <div class="border p-5 rounded"></div>
    </div>
  </Offcanvas>
</template>