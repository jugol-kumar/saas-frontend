<script setup>

  definePageMeta({
    middleware:['auth']
  })

  import {useToast} from "vue-toastification";
  const toast = useToast()

  const {params} = useRoute()


  const search = ref('');
  const page = ref(1);
  const perPage = ref(6)


  const { data: packages, error, pending, refresh } = useLazyAsyncData(
      'index.vue',
      () => $fetch( `customer/service/${parseInt(params?.id)}`, {
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
  watch(error, ()=>{
    if(error?.value){
      toast.error(error?.value?.data?.message)
    }
  })

  console.log(packages);




  const form = ref({
    service_id: parseInt(params?.id),
    name:'',
    price:'',
    position: '',
    description: ''
  });

  const addPackage = () => {
    const { data:save, error:saveError, pending:savePending} = useApiFetch(`customer/service-package`,{
      method:'POST',
      body: form.value
    });
    if(save.value) {
      refresh()
      useToast().success('Package Added Successfully');
    }
  }

</script>

<template>
  <div class="bg-glass-morphi glass-morphi-border d-flex align-items-center justify-content-between p-4 rounded mt-4">
    <h3>Packages</h3>
    <button class="primary-button" data-bs-toggle="offcanvas" data-bs-target="#addPackageModal">Add New</button>
  </div>

  <div class="row mt-4 services-detail">
    <div v-if="packages?.data?.length < 1 ">
      <h2>No Data Found.....</h2>
    </div>
    <h2 v-if="pending">Loading.....</h2>
    <div class="col-lg-4 col-md-6 col-12" v-for="pack in packages.data">
      <Package :info="pack"/>
    </div>
  </div>



  <Offcanvas id="addPackageModal" title="Add Package">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label text-white">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name">
      </div>
      <div class="mb-3">
        <label for="price" class="form-label text-white">Price</label>
        <input type="number" class="form-control" id="price" v-model="form.price" >
      </div>
      <div class="mb-3">
        <label for="position" class="form-label text-white">Position</label>
        <input type="number" class="form-control" id="position" v-model="form.position">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label text-white">Description</label>
        <textarea rows="10" class="w-100 border rounded p-2 bg-transparent text-white" v-model="form.description"></textarea>
      </div>
      <button type="submit" class="primary-button" @click.prevent="addPackage">Save</button>
    </form>
  </Offcanvas>





  <Offcanvas id="editPackageModal" title="Edit Package">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Price</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Detail</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Position</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <button type="submit" class="primary-button">Save</button>
    </form>
  </Offcanvas>


</template>