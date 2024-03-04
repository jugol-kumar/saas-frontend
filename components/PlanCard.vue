<script setup lang="ts">
  import {useToast} from "vue-toastification";


  const toast = useToast();


  const tokenstore = useTokenStore();
  const { fetchUser }= useAuthStore();
  const {info} = defineProps({
    info:{
      type:Object
    }
  })

  const user = useTokenStore()



  const updatePlan = async () => {
    const {data:update, error} = useApiFetch(`customer/update-plan/${info.id}`)
    if(update.value){
      const userData = await fetchUser();
      tokenstore.setAuthUser(userData?.data?.value)
      toast.success(update.value)
    }

    watch(error, ()=>{
      if(error?.value){
        toast.error(error?.value?.data?.message)
      }
    })
  }



</script>

<template>
  <div class="col-lg-4 col-md-6 col-12 mb-5">
    <div class="plan-card glass-morphi-border bg-glass-morphi p-4">
      <span class="type">{{ info?.name }}</span>
      <p v-if="user.getAuthUser?.custoemrDetails?.plan?.id === info?.id" >Expire Date: {{ user.getAuthUser.customer?.plan_exp_date }}</p>

      <div class="plan-card-top">

        <h3>{{ info?.price }} ৳/<span>{{ info?.duration }}</span> </h3>
<!--        <p>Free Trial Days: 0</p>-->
      </div>
      <div class="plan-card-body">
        <p style="white-space: pre-wrap">{{ info?.description }}</p>
<!--        <ul>-->
<!--          <li>-->
<!--            <Icon name="material-symbols:check-circle-outline-rounded" />-->
<!--            <span>Custom Domain</span>-->
<!--          </li>-->
<!--          <li>-->
<!--            <Icon name="material-symbols:check-circle-outline-rounded" />-->
<!--            <span>Sub Domain</span>-->
<!--          </li>-->
<!--          <li>-->
<!--            <Icon name="material-symbols:check-circle-outline-rounded" />-->
<!--            <span>Shipping Method</span>-->
<!--          </li>-->
<!--          <li>-->
<!--            <Icon name="material-symbols:check-circle-outline-rounded" />-->
<!--            <span>Additional Page</span>-->
<!--          </li>-->
<!--          <li>-->
<!--            <Icon name="material-symbols:check-circle-outline-rounded" />-->
<!--            <span>Blog</span>-->
<!--          </li>-->
<!--        </ul>-->
      </div>
      <div class="plan-card-footer text-end text-white">
        <div v-if="user.getAuthUser?.custoemrDetails?.plan_id === info?.id" class="glass-morphi-button" >Active Plan</div>
        <button v-else class="primary-button" @click="updatePlan">Upgrade now</button>
      </div>
    </div>
  </div>
</template>