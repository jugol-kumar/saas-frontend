<script setup>


  const {info} = defineProps({
    info:Object
  })


</script>


<template>
  <div @click="$emit('singlePackage', info.id)" class="glass-morphi-border bg-glass-morphi p-3 rounded mb-4 position-relative">

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

    <div data-bs-toggle="collapse" href="#collapseOne" role="button" aria-expanded="false" aria-controls="collapseOne">
      <button class="position-absolute px-2" style="bottom:10px;right:4px;">
        <Icon name="material-symbols:keyboard-arrow-down-rounded" size="24" />
      </button>
      <h4 class="mb-4">{{ info?.name }}</h4>
      <p>Price: {{ info?.price }}</p>
    </div>

    <div class="collapse" id="collapseOne">
      <div class="card card-body bg-transparent pt-4 border-0">
        <p>{{info?.description}}</p>
        <p class="pt-3 ms-n3">Position: {{info?.position}}</p>
      </div>
    </div>
  </div>
</template>