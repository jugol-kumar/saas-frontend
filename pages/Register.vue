<template>
  <div class="w-100 vh-100 d-flex align-items-center justify-content-center">
    <div class="auth-form">
      <form class="w-100">
        <h3>Registration</h3>
        <div class="form-floating w-100">
          <input type="text" class="form-control w-100" id="floatingTextarea">
        </div>
        <div class="form-floating w-100">
          <input type="text" class="form-control w-100" id="floatingTextarea">
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingTextarea">
          
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