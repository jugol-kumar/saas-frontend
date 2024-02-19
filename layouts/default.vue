<script setup>
</script>

<template>
  <div class="d-flex">
    <Sidebar />
    <main class="main min-vh-100 w-100">
      <div class="main-content">
        <Topbar />
        <div class="pt-5">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>