<script setup>
defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
    default: "Modal Title"
  },
  size: {
    type: String,
    default: "md"
  }
});
</script>

<template>
  <div class="modal modal-slide-in fade blur-bg" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div :class="`modal-dialog modal-${size}`">
      <div class="modal-content bg-glass-morphi glass-morphi-border">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
          <button type="button" data-bs-dismiss="modal" aria-label="Close">
            <Icon name="material-symbols:close" size="24" />
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="glass-morphi-button" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="primary-button">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>