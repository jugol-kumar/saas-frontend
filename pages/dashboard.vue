<script setup lang="ts">
  definePageMeta({
    middleware:['auth']
  })

  const {getAuthUser} = useTokenStore()





</script>

<template>
<!--  <div class="row my-5">-->
<!--    <div class="col-lg-3 col-md-6 col-12">-->
<!--      <div class="th-card">-->
<!--        <div class="th-card-top">-->
<!--          <span class="th-card-top-icon">-->
<!--            <Icon name="mdi:storefront-outline" />-->
<!--          </span>-->
<!--        </div>-->
<!--        <div class="th-card-body">-->
<!--          <h4>Total Stores</h4>-->
<!--          <p>12</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="col-lg-3 col-md-6 col-12">-->
<!--      <div class="th-card">-->
<!--        <div class="th-card-top">-->
<!--          <span class="th-card-top-icon">-->
<!--            <Icon name="material-symbols-light:rocket-launch-outline" />-->
<!--          </span>-->
<!--        </div>-->
<!--        <div class="th-card-body">-->
<!--          <h4>Total Plans</h4>-->
<!--          <p>7</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="row my-5">
    <div class="col-lg-5">
      <div class="bg-glass-morphi glass-morphi-border p-4 rounded h-100">
        <div class="d-flex gap-3">
          <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.2.1037843751.1707219469&semt=sph" class="width-60px height-60px rounded" alt="avatar">
          <div>
            <h4>Good Afternoon,</h4>
            <h3 class="fw-bold">
              {{getAuthUser.name}}
            </h3>


          </div>
        </div>
        <p class="py-4">
          {{ getAuthUser.role }}
        </p>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="bg-glass-morphi glass-morphi-border p-3 rounded">
        <div class="p-4">
          <img class="w-100 h-auto rounded" src="data:image/png;base64,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" alt="">
        </div>
        <div class="d-flex align-items-center justify-content-center gap-2">
          <button class="primary-red-button rounded">
             Store Link <Icon name="material-symbols-light:content-copy-outline" />
          </button>
          <button class="primary-icon-button rounded">
            <Icon name="material-symbols-light:share-outline" />
          </button>
        </div>
      </div>
    </div>

  </div>
  <div class="row">
    <div class="col-lg-3 col-md-6 col-12">
      <div class="th-card">
        <div class="th-card-top">
          <span class="th-card-top-icon">
            <Icon name="ph:currency-circle-dollar" />
          </span>
        </div>
        <div class="th-card-body">
          <h4>Total Order</h4>
          <p>9</p>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="th-card">
        <div class="th-card-top">
          <span class="th-card-top-icon">
            <Icon name="ph:currency-circle-dollar" />
          </span>
        </div>
        <div class="th-card-body">
          <h4>Total Sale</h4>
          <p>50000</p>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="th-card">
        <div class="th-card-top">
          <span class="th-card-top-icon">
            <Icon name="ic:baseline-production-quantity-limits" />
          </span>
        </div>
        <div class="th-card-body">
          <h4>Total Products</h4>
          <p>55</p>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="th-card">
        <div class="th-card-top">
          <span class="th-card-top-icon">
            <Icon name="material-symbols:supervisor-account-sharp" />
          </span>
        </div>
        <div class="th-card-body">
          <h4>Total Customer</h4>
          <p>55</p>
        </div>
      </div>
    </div>
  </div>


  <div class="row py-5">
    <div class="col-lg-6">
      <h3 class="text-secondary">Chart...</h3>
    </div>
    <div class="col-lg-6">
      <div class="bg-glass-morphi glass-morphi-border p-4 rounded">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <h3 class="fs-4">Popular Product</h3>
          <button class="primary-icon-button">
            <Icon name="material-symbols:download" />
          </button>
        </div>
        <div class="d-flex align-items-center justify-content-between py-2">
          <div class="d-flex align-items-center gap-3">
            <img class="width-60px height-60px rounded" src="/images/product.png" alt="">
            <h5>Apple iPhone 13</h5>
          </div>
          <h4>$999.29</h4>
        </div>
        <div class="d-flex align-items-center justify-content-between py-2">
          <div class="d-flex align-items-center gap-3">
            <img class="width-60px height-60px rounded" src="/images/product.png" alt="">
            <h5>Apple iPhone 13</h5>
          </div>
          <h4>$999.29</h4>
        </div>
        <div class="d-flex align-items-center justify-content-between py-2">
          <div class="d-flex align-items-center gap-3">
            <img class="width-60px height-60px rounded" src="/images/product.png" alt="">
            <h5>Apple iPhone 13</h5>
          </div>
          <h4>$999.29</h4>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>

</style>