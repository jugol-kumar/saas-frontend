<script setup>

definePageMeta({
  middleware:['auth']
})

const { data: services } = await useFetch('/customer/service');

  const isToggled = ref(false);


</script>
<template>
  <div class="bg-glass-morphi glass-morphi-border d-flex align-items-center justify-content-between p-4 rounded mt-4">
    <h3>Services</h3>
    <button class="primary-button"  data-bs-toggle="offcanvas" data-bs-target="#addService">Add New</button>
  </div>
  <div class="row my-4">
    {{ services }}
    <div class="col-lg-4">
      <div class="bg-glass-morphi glass-morphi-border p-3 rounded position-relative mb-4 service-card service-card--toggled">
        <button @click="isToggled = !isToggled" class="position-absolute" style="top:10px;right:10px;">
          <Icon name="ph:dots-three-outline-vertical-bold" />
        </button>
        <h4 class="mb-4">Ecommerce (Laravel)</h4>
        <p>Position: 1</p>
        <div class="actions  d-flex align-items-center justify-content-center gap-2 "
            :class="{'actions--toggled' : isToggled}">
          <button @click="isToggled = !isToggled" class="action-close">
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
    </div>
    <div class="col-lg-4">
      <div class="bg-glass-morphi glass-morphi-border p-3 rounded position-relative mb-4 service-card service-card--toggled">
        <button @click="isToggled = !isToggled" class="position-absolute" style="top:10px;right:10px;">
          <Icon name="ph:dots-three-outline-vertical-bold" />
        </button>
        <h4 class="mb-4">Ecommerce (Laravel)</h4>
        <p>Position: 1</p>
        <div class="actions  d-flex align-items-center justify-content-center gap-2 "
             :class="{'actions--toggled' : isToggled}">
          <button @click="isToggled = !isToggled" class="action-close">
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
    </div>
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