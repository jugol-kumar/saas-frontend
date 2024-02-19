<script setup>
</script>

<template>
  <div class="row glass-morphi-border bg-glass-morphi p-4 rounded mx-1 mt-4">
    <div class="col-lg-4">
      <div class="product-image">
        <div class="main-img mb-2">
          <img class="w-100 h-auto rounded" src="/images/product.png" alt="">
        </div>
        <ul class="d-flex align-items-center gap-2">
          <li>
            <img src="/images/product.png" class=" rounded primary-border-2" alt="Image">
          </li>
          <li>
            <img src="/images/product.png" class=" rounded" alt="Image">
          </li>
          <li>
            <img src="/images/product.png" class=" rounded" alt="Image">
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-7">
      <div class="product-description">
        <h3>Apple Watch</h3>
        <h4 class="fw-semibold py-2">$599</h4>
        <p>Available - <span class="primary-color fw-semibold">In Stock</span></p>
        <p class="fs-5 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda commodi culpa ducimus quasi sapiente velit voluptatum? A, blanditiis distinctio doloremque error esse, incidunt neque rem sed sequi totam ullam!</p>
        <div class="d-flex align-items-center gap-2">
          <button class="primary-button d-flex align-items-center gap-2">
            <Icon name="ic:sharp-add-shopping-cart" size="20" /> Add Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>