<script setup>
const data = [
  ['#65786','Tushar Imran', '500$', '19 Apr 2019', '-$295', 'edit'],
  ['#65786','Tushar Imran', '500$', '19 Apr 2019', '-$295', 'edit'],
  ['#65786','Tushar Imran', '500$', '19 Apr 2019', '-$295', 'edit'],
  ['#65786','Tushar Imran', '500$', '19 Apr 2019', '-$295', 'edit'],
  ['#65786','Tushar Imran', '500$', '19 Apr 2019', '-$295', 'edit'],
  ['#65786','Tushar Imran', '500$', '19 Apr 2019', '-$295', 'edit'],
]
</script>

<template>
  <div class="my-5">
    <DataTable :data="data" >
      <thead>
      <tr>
        <th>#</th>
        <th>CLIENT</th>
        <th>TOTAL</th>
        <th>ISSUED DATE</th>
        <th>BALANCE</th>
        <th>ACTION</th>
      </tr>
      </thead>
    </DataTable>
  </div>
</template>
