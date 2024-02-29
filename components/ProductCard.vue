<script setup>
  const {info} = defineProps({
    info:Object
  })
</script>
<template>

  <div class="col mb-4 cursor-pointer" @click="$emit('setToCart', info)">
    <div class="product-card bg-glass-morphi glass-morphi-border p-2 rounded blur-bg">
      <NuxtLink to="" class="product-card-top">
        <span>12 QTY</span>
        <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="rounded mb-1" alt="">
      </NuxtLink>
      <div class="product-card-body mt-n2">
        <h4>
          <NuxtLink to="" style="font-size: 15px;">{{ info?.name }}</NuxtLink>
        </h4>
        <div class="d-flex align-items-center justify-content-between py-2">
          <span>{{ info?.price }}  ৳</span>
          |
          <span>{{ info?.sku }}</span>

        </div>
        <div class="d-flex align-items-center gap-2 justify-content-end position-relative z-3">
          <NuxtLink to="" class="primary-icon-button">
            <Icon name="material-symbols:box-edit-outline" />
          </NuxtLink>
          <NuxtLink to="" class="primary-icon-button">
            <Icon name="material-symbols:delete-outline" />
          </NuxtLink>
          <NuxtLink to="" class="primary-icon-button">
            <Icon name="material-symbols:shopping-cart-checkout-rounded" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
