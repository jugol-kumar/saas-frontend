<script setup>


  const {info} = defineProps({
    info:Object
  })


</script>


<template>
  <div @click="$emit('singlePackage', info)" class="cursor-pointer glass-morphi-border bg-glass-morphi p-3 rounded mb-4 position-relative">
    <button class="position-absolute z-3" style="top:10px;right:10px;">
      <Icon name="ph:dots-three-outline-vertical-bold" />
    </button>
    <div class="bg-glass-morphi glass-morphi-border  actions" :class="{'actions--toggled': isToggled}">
      <button class="">
        <Icon name="material-symbols:edit" /> Edit
      </button>
      <button class="">
        <Icon name="material-symbols:delete-outline" /> Delete
      </button>
    </div>

    <div>
<!--      data-bs-toggle="collapse" href="#collapseOne" role="button" aria-expanded="false" aria-controls="collapseOne"-->
      <button class="position-absolute" style="bottom:10px;right:4px;">
        <Icon name="material-symbols:keyboard-arrow-down-rounded" size="24" />
      </button>
      <h4 class="mb-4">{{ info?.name }})</h4>
      <p>Price: {{ info?.price }}</p>
    </div>

    <div class="collapse" id="collapseOne">
      <div class="card card-body bg-transparent pt-4 border-0">
<!--        <ul class="d-flex flex-column gap-2">-->
<!--          <li class="d-flex align-items-center gap-2">-->
<!--            <Icon name="material-symbols:check-circle-outline" size="20" />-->
<!--            <span class="fw-semibold">1 Domain (.com .net .org .info)</span>-->
<!--          </li>-->
<!--          <li class="d-flex align-items-center gap-2">-->
<!--            <Icon name="material-symbols:check-circle-outline" size="20" />-->
<!--            <span class="fw-semibold">Web Hosting - 2 GB</span>-->
<!--          </li>-->
<!--          <li class="d-flex align-items-center gap-2">-->
<!--            <Icon name="material-symbols:check-circle-outline" size="20" />-->
<!--            <span class="fw-semibold">Monthly Data Transfer- 20 GB</span>-->
<!--          </li>-->
<!--          <li class="d-flex align-items-center gap-2">-->
<!--            <Icon name="material-symbols:check-circle-outline" size="20" />-->
<!--            <span class="fw-semibold">Email Address (Business) - 10</span>-->
<!--          </li>-->
<!--        </ul>-->
        <!--            <p class="pt-3 ms-n3">Position: 11</p>-->
        <div class="text-white" v-html="info?.description"/>
      </div>
    </div>
  </div>
</template>