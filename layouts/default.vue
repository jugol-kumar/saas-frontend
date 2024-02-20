<script setup>
</script>

<template>
  <div class="d-flex">
    <Sidebar />
    <main class="main min-vh-100 w-100">
      <div class="main-content">
        <Topbar />
          <slot />
      </div>
    </main>
  </div>
</template>