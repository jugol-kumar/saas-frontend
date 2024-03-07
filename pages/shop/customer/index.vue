<script setup>

</script>

<template>
  <div class="d-flex align-items-center justify-content-between py-5">
    <h3>Customers</h3>
    <button class="primary-button d-flex align-items-center gap-2">
      <Icon name="mdi:storefront-plus-outline" size="20" />
      Create a New Store
    </button>
  </div>

  <div class="row">
    <div class="col-lg-3 col-12">
      <div class="bg-glass-morphi glass-morphi-border d-flex flex-column align-items-center gap-3 px-3 py-4 rounded position-relative">
        <NuxtLink to="/shop/customer/detail" class="position-absolute bg-glass-morphi glass-morphi-border width-30px height-30px rounded d-flex align-items-center justify-content-center" style="top: 10px;right:10px">
          <Icon name="material-symbols-light:visibility-outline-rounded" size="18" />
        </NuxtLink>
        <img src="/public/images/avatar.avif" class="width-60px height-60px rounded-5" alt="">
        <div>
          <h4>Customer Name</h4>
          <p>example@example.com</p>
        </div>
      </div>
    </div>
  </div>
</template>