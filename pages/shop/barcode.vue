<script lang="ts" setup>
  import type {Header, Item} from "vue3-easy-data-table";

  const headers: Header[] = [
    {text: "PLAYER", value: "player"},
    {text: "TEAM", value: "team"},
    {text: "NUMBER", value: "number"},
    {text: "POSITION", value: "position"},
    {text: "HEIGHT", value: "indicator.height"},
    {text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
    {text: "LAST ATTENDED", value: "lastAttended", width: 200},
    {text: "COUNTRY", value: "country"},
  ];

  const items: Item[] = [
  {player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
  {player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
  {player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
  {player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
  ];

  const itemsSelected = ref<Item[]>([]);
</script>



<template>
  <div class="row mt-8">
    <div class="col-md-8 mx-auto">
      <div class="card border-top-5">
        <div class="card-body">
          <h2 class="text-black">Select Products For Print Label</h2>
          <v-select>

          </v-select>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-8">
    <div class="col-md-12 mx-auto">
      <div class="card border-top-5 bg-transparent">
        <div class="card-body">
          {{ itemsSelected }}
          <h2>Select Products For Print Label</h2>
          <EaseTable
              v-model:items-selected="itemsSelected"
              show-index
              :headers="headers"
              :items="items"/>
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
  --easy-table-body-row-background-color: #000;
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
