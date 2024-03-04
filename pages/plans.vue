<script setup>
import {useToast} from "vue-toastification";
import {useTokenStore} from "~/stores/useTokenStore.js";
const toast = useToast();


const {data, error, pending} = useApiFetch(`customer/plans`)
watch(error, ()=>{
  if(error?.value){
    toast.error(error?.value?.data?.message)
  }
})

</script>

<template>

  <div v-if="pending">
    <h1>Loading......</h1>
  </div>

  <div v-else class="row flex-wrap mt-5">
    <PlanCard :info="item" v-for="item in data" :key="`single-plan-card-${item.id}`"/>
  </div>
</template>
