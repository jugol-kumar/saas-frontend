<template>
  <div class="d-flex align-items-center justify-content-between mx-0 row my-4 pt-1">
    <div class="col-sm-12 col-md-5">
      <p class="text-shadow fw-medium text-decoration-underline">
        Showing
        <span class="primary-color">{{ from }}</span>
        to
        <span class="primary-color">{{ to }}</span>
        of
        <span class="primary-color">{{ total }}</span>
        entries
      </p>
    </div>
    <div class="col-sm-12 col-md-7">
      <div class="d-flex align-items-center justify-content-end">
        <ul class="pagination flex p-2  rounded gap-2 border">
          <li
              class="paginate_button page-item"
              v-for="(link) in links"
              :class="{ 'active' : link?.active }" :key="link.id"
          >
            <NuxtLink :to="link.url" class="page-link" v-html="link.id" />
          </li>


          <li class="paginate_button page-item active">
            <NuxtLink to="" class="page-link">1</NuxtLink>
          </li>
          <li class="paginate_button page-item">
            <NuxtLink to="" class="page-link">2</NuxtLink>
          </li>
          <li class="paginate_button page-item">
            <NuxtLink to="" class="page-link">3</NuxtLink>
          </li>
          <li class="paginate_button page-item">
            <NuxtLink to="" class="page-link">4</NuxtLink>
          </li>
          <li class="paginate_button page-item">
            <NuxtLink to="" class="page-link">5</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Object
  },
  from: {
    type: Number,
    default: 0
  },
  to: {
    type: Number,
    default: 3
  },
  total: {
    type: Number,
    default: 10
  },
})
</script>