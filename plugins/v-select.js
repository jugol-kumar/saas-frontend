import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

export default defineNuxtPlugin((app) => {
    app.vueApp.component('v-select', vSelect)
    console.log('plugin setup')
})
