<script setup>





  import {useToast} from "vue-toastification";

  definePageMeta({
    middleware:['auth']
  })

  const search = ref('');
  const page = ref(1);
  const perPage = ref(2)
  const { data: products, error, pending, refresh } = useLazyAsyncData(
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



  // Add new Product
  const url = ref(null)
  const form = ref({
    name:'',
    image:'',
    price: '',
    sku: '',
    description: ''
  });
  const onFileChange = (e) => {
    const file = e.target.files[0];
    form.value.image = file;
    url.value = URL.createObjectURL(file);
  }

  const addProduct = async () => {

    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('price', form.value.price);
    formData.append('sku', form.value.sku);
    formData.append('description', form.value.description);
    formData.append('image', form.value.image);

    // console.log(formData);

    const {data:save, error:saveError, pending:savePending} = await useApiFetch(`customer/product`, {
      method: 'POST',
      body: formData,
    });
    if(save.value) {
      refresh();
      useToast().success('Product Added Successfully');
    }
  }

  // Edit product
  const newUrl = ref(null)
  const newProduct = ref({
    name:'',
    price: '',
    sku:'',
    description:'',
    image: null,
  })
  const editProduct = (product) => {
    newProduct.value = product
  }
  const newFileChange = (e) => {
    const newFile = e.target.files[0];
    newProduct.value.image = newFile;
    newUrl.value = URL.createObjectURL(newFile);
  }

  const updateProduct = async (id) => {
    const {data:saveData} = await useApiFetch(`customer/product/${id}`, {
      method: 'PATCH',
      body: newProduct.value
    })
  }


  const deleteProduct = async (id) => {
    const {data:responseData} = await useApiFetch(`customer/product/${id}`, {
      method:'DELETE'
    });
    if(responseData) {
      refresh();
      useToast().success('Product Deleted Successfully');
    }
  }

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
          <img :src="product?.image" class="w-100 h-100" alt="">
        </NuxtLink>
        <div class="th-list-right w-65">
          <div class="th-list-right-text">
            <div class="d-flex align-items-center justify-content-between">
              <h4 class="w-80">
                <NuxtLink to="/shop/product-detail" class="fs-6">{{ product?.name }}</NuxtLink>
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
                <button class="primary-icon-button" data-bs-toggle="offcanvas" data-bs-target="#editProduct" @click="editProduct(product)">
                  <Icon name="material-symbols:box-edit-outline" />
                </button>
                <button class="primary-icon-button" @click="deleteProduct(product.id)">
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
  </div>



<!--  <Pagination :links="products.links" :from="products.from" :to="products.to" :total="products.total"/>-->


  <Offcanvas id="addProduct" title="Add new product" width=700>
    <div class="mb-4">
      <div class="border-2 p-3 rounded">
        <div class="mb-3">
          <label for="product-name" class="text-white d-block mb-1">Product Name</label>
          <input type="text" class="p-2 border rounded w-100" v-model="form.name" placeholder="Enter Product Name.. " >
        </div>
        <div class="mb-3 row">
          <div class="col-6">
            <label for="category" class="text-white d-block mb-1">Category</label>
            <v-select

            />
          </div>
          <div class="col-6">
            <label for="brand" class="text-white d-block mb-1">Brand</label>
            <v-select

            />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <label for="product-price" class="text-white d-block mb-1">Price</label>
            <input type="number" class="p-2 border rounded w-100" v-model="form.price" placeholder=" ৳..">
          </div>
          <div class="col-6">
            <label for="product-sku" class="text-white d-block mb-1">stock keeping unit (sku)</label>
            <input type="text" class="p-2 border rounded w-100" v-model="form.sku" >
          </div>
        </div>
      </div>
    </div>
    <div class="row flex-column p-3 gap-3">
      <div class="col">
        <label for="product-image" class="text-white d-block mb-1">Product Image</label>
        <div >
          <label for="product-image" class="d-flex align-items-center p-2 border cursor-pointer gap-3 rounded">
            <Icon name="ic:outline-cloud-upload" size="24" />
            <span>Upload Image</span>
            <input
                type="file"
                id="product-image"
                @change="onFileChange"
                hidden
            />
          </label>
          <div>
            <img v-if="url" :src="url" alt="" style="width: 300px;height: auto">
          </div>
        </div>
      </div>
      <div class="col">
        <label for="description" class="text-white d-block mb-1">Description</label>
        <textarea class="w-100 border bg-transparent rounded p-2 text-white" rows="10" v-model="form.description"></textarea>
      </div>
    </div>
    <div class="d-flex align-items-center gap-3">
      <button type="submit" class="primary-button" @click.prevent="addProduct">Save</button>
      <button class="glass-morphi-button">Cancel</button>
    </div>
  </Offcanvas>



  <Offcanvas id="editProduct" title="Edit product" width=700>
    <div class="mb-4">
      <div class="border-2 p-3 rounded">
        <div class="mb-3">
          <label for="product-name" class="text-white d-block mb-1">Product Name</label>
          <input type="text" class="p-2 border rounded w-100" v-model="newProduct.name" placeholder="Enter Product Name.. " >
        </div>
        <div class="mb-3 row">
          <div class="col-6">
            <label for="category" class="text-white d-block mb-1">Category</label>
            <v-select

            />
          </div>
          <div class="col-6">
            <label for="brand" class="text-white d-block mb-1">Brand</label>
            <v-select

            />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <label for="product-price" class="text-white d-block mb-1">Price</label>
            <input type="number" class="p-2 border rounded w-100" v-model="newProduct.price" placeholder=" ৳..">
          </div>
          <div class="col-6">
            <label for="product-sku" class="text-white d-block mb-1">stock keeping unit (sku)</label>
            <input type="text" class="p-2 border rounded w-100" v-model="newProduct.sku" >
          </div>
        </div>
      </div>
    </div>
    <div class="row flex-column p-3 gap-3">
      <div class="col">
        <label for="product-image" class="text-white d-block mb-1">Product Image</label>
        <div >

          <label for="product-new-image" class="d-flex align-items-center p-2 border cursor-pointer gap-3 rounded">
            <Icon name="ic:outline-cloud-upload" size="24" />
            <span>Upload Image</span>
            <input
                type="file"
                id="product-new-image"
                @change="newFileChange"
                hidden
            />
          </label>
          <div class="py-4">
            <img v-if="newUrl" :src="newUrl" style="width: 300px;height: auto">
            <img :src="newProduct.image" :class="{'d-none' : newUrl}" style="width: 300px;height: auto">
          </div>
        </div>
      </div>
      <div class="col">
        <label for="description" class="text-white d-block mb-1">Description</label>
        <textarea class="w-100 border bg-transparent rounded p-2 text-white" rows="10" v-model="newProduct.description"></textarea>
      </div>
    </div>
    <div class="d-flex align-items-center gap-3">
      <button type="submit" class="primary-button" @click.prevent="updateProduct(newProduct.id)">Save Change</button>
      <button class="glass-morphi-button">Cancel</button>
    </div>
  </Offcanvas>
</template>