<template>
    <v-select label="name"
              :filterable="false"
              @keyup.enter="searchByScan"
              :options="options"
              v-model="selectedItem"
              @update:modelValue="setToCart"
              @search="onSearch">

      <template v-slot:option="option">
        <li class="d-flex align-items-start py-1 gap-3">
          <div class="avatar me-75">
            <img src="/images/placeholder.webp" alt="" width="38" height="38">
          </div>
          <div class="d-flex align-items-center justify-content-between w-100">
            <div class="me-1 d-flex flex-column">
              <strong class="mb-25 text-capitalize">{{ option?.name }}</strong>
              <span>{{ option?.price }} ৳</span>
            </div>
          </div>
        </li>
      </template>
    </v-select>
</template>

<script setup>
    import {debounce} from "lodash";
    import {useToast} from "vue-toastification";
    import {useCartStore} from "~/stores/useCartStore.js";

    const {error, success} = useToast();
    const {addToCart} = useCartStore();

    const props = defineProps({
      products:Array
    })

    const selectedItem = ref(null)

    const options = ref(props.products ?? []);
    const onSearch = (search, loading) => {
      if (search.length) {
        loading(true);
        searchDebounced(search, loading);
      }
    };

    const searchDebounced = debounce((search, loading) => {
      if(search.length > 3){
        fetch(`${useRuntimeConfig().public.baseUrl+'customer/product'}?search=${search}`,{
          headers:{
            authorization: `Bearer ${useTokenStore().token}`
          }
        })
            .then(res => res.json())
            .then(json => {
              if(json.data?.length < 1){
                error('Not Data Found...')
              }
              // if (json.data.length === 1){
              //   success('Added To Pos...')
              // }
              // if (json.data.length > 2){
                options.value = json.data;
              // }

              loading(false);
            })
            .catch(err => {
              error('Error fetching data:')
              console.error('Error fetching data:', err);
              loading(false);
            });
      }

    }, 200)

    const searchByScan = (event) =>{
      //
    }


    const setToCart = (event) => {
      if(event) addToCart({...event, 'buyQty': 1})

      selectedItem.value = null;

    }






</script>

<style lang="css">

.d-center {
  display: flex;
  align-items: center;
}

.selected img {
  width: auto;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1);
}

.v-select .dropdown li:last-child {
  border-bottom: none;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  width: 100%;
  font-size: 1.25em;
  color: #3c3c3c;
}

.v-select .dropdown-menu .active > a {
  color: #fff;
}

</style>