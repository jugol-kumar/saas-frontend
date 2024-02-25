<template>
  <div class="d-flex align-items-center justify-content-between mx-0 row my-4 pt-1">
    <div class="col-sm-12 col-md-5">
      <p class="text-shadow fw-medium text-decoration-underline">
        Showing
        <span class="primary-color">{{ pagination?.meta?.from }}</span>
        to
        <span class="primary-color">{{ pagination?.meta?.to }}</span>
        of
        <span class="primary-color">{{ pagination?.meta?.total }}</span>
        entries
      </p>
    </div>

    <div class="col-sm-12 col-md-7">
      <div class="d-flex align-items-center justify-content-end">
        <ul class="pagination flex p-2  rounded gap-2 border text-white">
          <li
              class="paginate_button page-item"
              v-for="paginations in props.pagination.meta?.last_page"
              :class="{'active' : paginations === props.pagination.meta.current_page}"
              :key="'padingate'+paginations"
          >
            <span @click="$emit('changePage', paginations)" class="page-link" v-html="paginations" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pagination:{
    type: Object
  },
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
    default: null
  },
})
</script>