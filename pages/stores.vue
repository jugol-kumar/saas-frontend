<script setup lang="ts">
  const isToggled = ref(false)
</script>
<template>
  <div class="mt-4">
    <h3>Stores</h3>
  </div>
  <div class="row my-5">
    <div class="col-lg-4 col-md-6 col-12">
      <div class="bg-glass-morphi glass-morphi-border p-2 rounded overflow-hidden shop-card">
        <button class="shop-card-toggler" @click="isToggled = !isToggled">
          <Icon name="ph:dots-three-outline-vertical-fill" />
        </button>
        <div class="d-flex gap-3">
          <div>
            <Icon name="solar:shop-2-bold" size="60" />
          </div>
          <div>
            <h5>Rajodiya Infotech <span class="primary-bg py-1 px-2 fs-6 rounded">Gold</span></h5>
            <p>owner@example.com	</p>
            <div class="d-flex align-items-center gap-3">
              <p>Store: 1</p>
            </div>
          </div>
        </div>
        <div class="actions  d-flex align-items-center justify-content-center gap-2 "
             :class="{'actions--toggled' : isToggled}">
          <button @click="isToggled = !isToggled" class="action-close">
            <Icon name="material-symbols:close" size="20" />
          </button>
          <NuxtLink to="" class="primary-icon-button">
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
    <div class="col-lg-4 col-md-6 col-12">
      <div class="bg-glass-morphi glass-morphi-border p-2 rounded overflow-hidden shop-card">
        <button class="shop-card-toggler" @click="isToggled = !isToggled">
          <Icon name="ph:dots-three-outline-vertical-fill" />
        </button>
        <div class="d-flex gap-3">
          <div>
            <Icon name="solar:shop-2-bold" size="60" />
          </div>
          <div>
            <h5>Rajodiya Infotech <span class="primary-bg py-1 px-2 fs-6 rounded">Gold</span></h5>
            <p>owner@example.com	</p>
            <div class="d-flex align-items-center gap-3">
              <p>Store: 1</p>
            </div>
          </div>
        </div>
        <div class="actions  d-flex align-items-center justify-content-center gap-2 "
             :class="{'actions--toggled' : isToggled}">
          <button @click="isToggled = !isToggled" class="action-close">
            <Icon name="material-symbols:close" size="20" />
          </button>
          <NuxtLink to="" class="primary-icon-button">
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
    <div class="col-lg-4 col-md-6 col-12">
      <div class="bg-glass-morphi glass-morphi-border p-2 rounded overflow-hidden shop-card">
        <button class="shop-card-toggler" @click="isToggled = !isToggled">
          <Icon name="ph:dots-three-outline-vertical-fill" />
        </button>
        <div class="d-flex gap-3">
          <div>
            <Icon name="solar:shop-2-bold" size="60" />
          </div>
          <div>
            <h5>Rajodiya Infotech <span class="primary-bg py-1 px-2 fs-6 rounded">Gold</span></h5>
            <p>owner@example.com	</p>
            <div class="d-flex align-items-center gap-3">
              <p>Store: 1</p>
            </div>
          </div>
        </div>
        <div class="actions  d-flex align-items-center justify-content-center gap-2 "
             :class="{'actions--toggled' : isToggled}">
          <button @click="isToggled = !isToggled" class="action-close">
            <Icon name="material-symbols:close" size="20" />
          </button>
          <NuxtLink to="" class="primary-icon-button">
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
</template>

<style scoped>

</style>