<template>
  <div class="w-100 vh-100 d-flex align-items-center justify-content-center">
    <div class="auth-form">
      <form class="w-100">
        <h3>Registration</h3>
        <div class="w-100">
          <label for="name" class="mb-2">Name</label>
          <input type="text" class="form-control w-100" id="text">
        </div>
        <div class="w-100">
          <label for="email" class="mb-2">Email</label>
          <input type="email" class="form-control w-100" id="email">
        </div>
        <div class="w-100">
          <label for="password" class="mb-2">Password</label>
          <input type="password" class="form-control" id="password">
        </div>
        <div class="text-center">
          <Button :isLoading="load">Register</Button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
  const load = false
</script>