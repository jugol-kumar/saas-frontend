import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

defineNuxtPlugin( (nuxtApp) => {
    DataTable.use(DataTablesCore);
});