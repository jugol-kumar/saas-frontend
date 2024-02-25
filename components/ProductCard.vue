<script setup>
  const {info} = defineProps({
    info:Object
  })
</script>
<template>
  <div class="col mb-3">
    <div class="product-card bg-glass-morphi glass-morphi-border p-2 rounded blur-bg">
      <NuxtLink to="" class="product-card-top">
        <span>12 QTY</span>
        <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="rounded mb-1" alt="">
      </NuxtLink>
      <div class="product-card-body">
        <h4>
          <NuxtLink to="">{{ info?.name }}</NuxtLink>
        </h4>
        <div class="d-flex align-items-center justify-content-between">
          <span>{{ info?.price }}</span>
          |
          <span>{{ info?.sku }}</span>
          <div class="d-flex align-items-center gap-2">
            <NuxtLink to="" class="primary-icon-button">
              <Icon name="material-symbols:box-edit-outline" />
            </NuxtLink>
            <NuxtLink to="" class="primary-icon-button">
              <Icon name="material-symbols:delete-outline" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
