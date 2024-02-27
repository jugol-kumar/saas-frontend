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


  const { data: packages, error, pending } = useLazyAsyncData(
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


</script>

<template>
  <div class="bg-glass-morphi glass-morphi-border d-flex align-items-center justify-content-between p-4 rounded mt-4">
    <h3>Packages</h3>
    <button class="primary-button" data-bs-toggle="offcanvas" data-bs-target="#addPackageModal">Add New</button>
  </div>

  <div class="row mt-4 services-detail">
    <div v-if="packages?.packages?.data.length < 1 ">
      <h2>No Data Found.....</h2>
    </div>
    <h2 v-if="pending">Loading.....</h2>
    <div class="col-lg-4 col-md-6 col-12" v-for="pack in packages?.packages?.data">
      <Package :info="pack"/>
    </div>
  </div>

  <Offcanvas id="addPackageModal" title="Add Package">
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

  <Modal id="packageModal" title="Add Package" size="lg">
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
    </form>
  </Modal>

</template>