<script setup>
const {isLoading} = defineProps({
    isLoading: {
      type: Boolean || {},
      default: false
    }
})
</script>

<template>
<!--  Need To Remove @click event -->
  <button
      class="button"
      :class="{'loading' : isLoading}"
  >
    <span v-if="!isLoading">
      <slot></slot>
    </span>
    <span v-if="isLoading" class="spinner"></span>
  </button>
</template>



<style scoped>
.button {
  position: relative;
  height: 50px;
  width: 200px;
  background-image: none;
  border: none;
  outline: none;
  background-color: rgb(200, 8, 8);
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.button::after {
  content: '';
  display: block;
  position: absolute;
  width: 160px;
  height: 40px;
  background-color: black;
  z-index: -1;
  left: calc(50% - 80px);
  top: 10px;
  opacity: 0.3;
  filter: blur(5px);
  transition: all 0.2s ease-out;
}
.button:hover::after {
  opacity: 0.5;
  filter: blur(20px);
  transform: translatey(10px) scalex(1.2);
}
.button:active {
  background-color: rgb(200, 8, 8);
}
.button:active::after {
  opacity: 0.3;
}
.loading {
  border-radius: 50px;
  width: 50px;
}
.button.loading::after {
  width: 40px;
  left: 5px;
  top: 12px;
  border-radius: 100%;
}
.spinner {
  display: block;
  width: 34px;
  height: 34px;
  position: absolute;
  top: 8px;
  left: calc(50% - 17px);
  background: transparent;
  box-sizing: border-box;
  border-top: 4px solid white;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 100%;
  animation: spin 0.6s ease-out infinite;
}
@keyframes spin {
  100% {transform: rotate(360deg)}
}
</style>
