<script setup>
defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
    default: "Offcanvas Title"
  },
  width: {
    type: Number,
    default: 400
  }

});
</script>
<template>
  <div
      class="offcanvas offcanvas-end bg-glass-morphi glass-morphi-border blur-bg-30"
      aria-labelledby="offcanvasEndLabel"
      :style="`--bs-offcanvas-width:${width}px`"
      tabindex="-1"
      :id="id"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasTopLabel">{{ title }}</h5>
      <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
        <Icon name="material-symbols:close" size="24" />
      </button>
    </div>
    <div class="offcanvas-body">
      <slot></slot>
    </div>
  </div>
</template>