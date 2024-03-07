<script lang="ts" setup>
import type {Header, Item} from "vue3-easy-data-table";

const headers: Header[] = [
  {text: "DATE", value: "date"},
  {text: "NAME", value: "name"},
  {text: "VALUE", value: "value"},
  {text: "PAYMENT TYPE", value: "paymentType"},
  {text: "STATUS", value: "status",},
  {text: "PAYMENT STATUS", value: "paymentStatus",},
  {text: "ACTION", value: "action"},
];

const items: Item[] = [
  {date: "Aug 1, 2022", name: "customer", value: '$50', paymentType: 'COD', status: 'Pending', paymentStatus: "success", action: "action"},
];

const itemsSelected = ref<Item[]>([]);
</script>
<template>
  <div class="row my-5">
    <div class="col-lg-3">
      <div class="p-3 bg-glass-morphi glass-morphi-border rounded text-center">
        <img src="/public/images/avatar.avif"
             class="w-100 h-auto rounded-5"
        >
        <h4 class="pt-3">Customer Name</h4>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="p-3 bg-glass-morphi glass-morphi-border rounded d-flex h-100">
        <ul class="w-30 d-flex flex-column gap-2">
          <li class="text-white d-flex">
            <spna class="w-50">Phone</spna>
            <span>:</span>
          </li>
          <li class="text-white d-flex">
            <spna class="w-50">Email</spna>
            <span>:</span>
          </li>
          <li class="text-white d-flex">
            <spna class="w-50">Address</spna>
            <span>:</span>
          </li>
        </ul>
        <div>
          <ul class="d-flex flex-column gap-2">
            <li class="text-white">4456789</li>
            <li class="text-white">customer@customer.com</li>
            <li class="text-white">Dhaka Bangladesh</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4">
    <div class="row mt-8">
      <div class="col-md-12 mx-auto">
        <div class="card bg-glass-morphi glass-morphi-border">
          <div class="card-body">
            {{ itemsSelected }}
            <h3 class="mb-4">#Order</h3>
            <EaseTable
                v-model:items-selected="itemsSelected"
                show-index
                :headers="headers"
                :items="items"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root{
  --easy-table-border: none;
  --easy-table-row-border: 1px solid gray;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 0px;
  --easy-table-header-font-color: theme("colors.gray.700");
  --easy-table-header-background-color: theme("colors.gray.50");
  --easy-table-header-item-padding: 16px;

  /* Row & Body */
  --easy-table-body-row-height: 0px;
  --easy-table-body-row-font-size: 14px;
  --easy-table-body-row-font-color: theme("colors.gray.600");
  --easy-table-body-row-background-color: transparent;
  --easy-table-body-row-hover-font-color: theme("colors.gray.700");
  --easy-table-body-row-hover-background-color: theme("colors.gray.100");
  --easy-table-body-even-row-font-color: #373737;
  --easy-table-body-even-row-background-color: #fff;
  --easy-table-body-item-padding: 25px;

  /* Footer */
  --easy-table-footer-background-color: #fff;
  --easy-table-footer-font-color: theme("colors.gray.500");
  --easy-table-footer-font-size: 12px;
  --easy-table-footer-padding: 20px 5px;
  --easy-table-footer-height: 0px;
  --easy-table-rows-per-page-selector-width: auto;
  --easy-table-rows-per-page-selector-option-padding: 5px;

  /* Message */
  --easy-table-message-font-color: #212121; /*Empty message related, when no items in table */
  --easy-table-message-font-size: 16px; /*Empty message related, when no items in table */
  --easy-table-message-padding: 30px 0px; /* Empty message related, when no items in table */

  /* Loader */
  --easy-table-loading-mask-background-color: #fff;
  --easy-table-loading-mask-opacity: 0.5;

  /* Scrollbar */
  --easy-table-scrollbar-track-color: #fff;
  --easy-table-scrollbar-color: #fff;
  --easy-table-scrollbar-thumb-color: theme("colors.gray.200");
  --easy-table-scrollbar-corner-color: #fff;
  --easy-table-buttons-pagination-border: 1px solid #e0e0e0;
}
</style>