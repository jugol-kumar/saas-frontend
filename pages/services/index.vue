<script setup>

  definePageMeta({
    middleware:['auth']
  })

  const search = ref('');
  const page = ref(1);
  const perPage = ref(6)
  const { data: services, error, pending } = useLazyAsyncData(
      'index.vue',
      () => $fetch( `customer/service`, {
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
const setId = ref(null)
</script>
<template>
  <div class="bg-glass-morphi glass-morphi-border d-flex align-items-center justify-content-between p-4 rounded mt-4">
    <h3>Services</h3>

    <select v-model="perPage">
      <option value="2">2</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>

    <input type="text" class="form-control w-50" placeholder="Search...." v-model="search">

    <button class="primary-button"  data-bs-toggle="offcanvas" data-bs-target="#addService">Add New</button>
  </div>
  <div class="row my-4">
    <div v-if="pending">
      <h2 class="text-white">Loading....</h2>
    </div>
    <NuxtLink :to="`/services/${item.id}`" v-else v-for="(item, i) in services?.data" class="col-lg-4">
      <div class="bg-glass-morphi glass-morphi-border p-3 rounded position-relative mb-4 service-card service-card--toggled">
        <button  class="position-absolute" @click="setId = i" style="top:10px;right:10px;">
          <Icon name="ph:dots-three-outline-vertical-bold" />
        </button>

        <h4 class="mb-4">{{ item?.name }}</h4>

        <p>Position: 1</p>
        <div class="actions  d-flex align-items-center justify-content-center gap-2 "
            :class="{'actions--toggled' : i === setId}">
          <button class="action-close" @click="setId = null">
            <Icon name="material-symbols:close" size="20" />
          </button>
          <NuxtLink to="/service-detail" class="primary-icon-button">
            <Icon name="ic:outline-remove-red-eye" />
          </NuxtLink>
          <button class="primary-icon-button">
            <Icon name="material-symbols:edit" />
          </button>
          <button class="primary-icon-button">
            <Icon name="material-symbols:delete-outline" />
          </button>
        </div>
      </div>
    </NuxtLink>
  </div>






  <Offcanvas id="addService" title="Add Service">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Services Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Order Level</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="primary-button">Save</button>
        <button class="glass-morphi-button">Cancel</button>
      </div>
    </form>
  </Offcanvas>

</template>