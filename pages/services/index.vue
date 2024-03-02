<script setup>


  import {useToast} from "vue-toastification";

  definePageMeta({
    middleware:['auth']
  })

  const search = ref('');
  const page = ref(1);
  const perPage = ref(6)
  const { data: services, error, pending, refresh } = useLazyAsyncData(
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




const form = ref({
  name: '',
  position: '',
  store_id: 1
});

const addService = async () => {
  const {data:save, error:saveError, pending:savePending} = useApiFetch(`customer/service`,{
    method:"POST",
    body:form.value,
  })
  if(save.value) {
    refresh()
    useToast().success('Service Added Successfully');
  }
}


const newService = ref({
  name: '',
  position: '',
  store_id: 1
});

const editService = (item) => {
  newService.value = item
}

const updateService = async (id) => {
  const {data:saveData} = await useApiFetch(`customer/service/${id}`, {
    method:'PATCH',
    body:newService.value,
  });
  if(saveData.value) {
    refresh();
    useToast().success('Service Updated Successfully');
  }

}

const deleteService = async (id) => {
  const {data:saveData} = await useApiFetch(`customer/service/${id}`, {
    method: 'DELETE'
  });
  if(saveData.value){
    refresh()
    useToast().success('Service Deleted Successfully');
  }
}


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
    <div v-else v-for="(item, i) in services?.data" class="col-lg-4">
      <div class="bg-glass-morphi glass-morphi-border p-3 rounded position-relative mb-4 service-card service-card--toggled">
        <button  class="position-absolute" @click="setId = i" style="top:10px;right:10px;">
          <Icon name="ph:dots-three-outline-vertical-bold" />
        </button>

        <NuxtLink :to="`/services/${item.id}`" class="d-block">
          <h4 class="mb-4">{{ item?.name }}</h4>
        </NuxtLink>

        <NuxtLink :to="`/services/${item.id}`"  class="d-block">
          <p>Position: 1</p>
        </NuxtLink>
        <div class="actions  d-flex align-items-center justify-content-center gap-2"
            :class="{'actions--toggled' : i === setId}">
          <button class="action-close" @click="setId = null">
            <Icon name="material-symbols:close" size="20" />
          </button>
          <NuxtLink :to="`/services/${item.id}`" class="primary-icon-button">
            <Icon name="ic:outline-remove-red-eye" />
          </NuxtLink>
          <button class="primary-icon-button" @click="editService(item)" data-bs-target="#editService" data-bs-toggle="offcanvas">
            <Icon name="material-symbols:edit" />
          </button>
          <button class="primary-icon-button" @click="deleteService(item.id)">
            <Icon name="material-symbols:delete-outline" />
          </button>
        </div>
      </div>
    </div>
  </div>


<!--  Add Service -->
  <Offcanvas id="addService" title="Add Service">
    <form @submit.prevent="addService">
      <div class="mb-3">
        <label for="name" class="form-label text-white">Services Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name">
      </div>
      <div class="mb-3">
        <label for="position" class="form-label text-white">Position</label>
        <input type="number" class="form-control" id="position" v-model="form.position">
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="primary-button" type="submit">Add</button>
        <button class="glass-morphi-button">Cancel</button>
      </div>
    </form>
  </Offcanvas>

<!-- Edit Service -->
  <Offcanvas id="editService" title="Edit Service">
    <form @submit.prevent="updateService(newService.id)">
      <div class="mb-3">
        <label for="name" class="form-label text-white">Services Name</label>
        <input type="text" class="form-control" id="name" v-model="newService.name">
      </div>
      <div class="mb-3">
        <label for="position" class="form-label text-white">Position</label>
        <input type="number" class="form-control" id="position" v-model="newService.position">
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="primary-button" type="submit">Save change</button>
        <button class="glass-morphi-button">Cancel</button>
      </div>
    </form>
  </Offcanvas>
</template>