<script setup>
// import DataTable from 'datatables.net-vue3';
// import DataTablesCore from 'datatables.net';
// import 'datatables.net-select';
// import 'datatables.net-responsive';
// DataTable.use(DataTablesCore);

const props = defineProps({
  data: Array,
})

</script>

<template>
  <div class=" glass-morphi-border bg-glass-morphi blur-bg rounded">
    <DataTable
        class="display"
        :data="data"
    >
      <slot></slot>
    </DataTable>
  </div>
</template>

<style scoped lang="scss">
//@import 'datatables.net-dt';
//@import 'datatables.net-bs5';
</style>