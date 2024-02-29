// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/css/app.css'],
  devtools: {enabled: false},
  build:{
    transpile: ['vue-toastification']
  },
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // 'bootstrap-vue/nuxt'
  ],
  plugins: [
    {
      src: 'plugins/bootstrap.js',
      mode: 'client'
    }
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_URL,
      appUrl: process.env.APP_URL,
    }
  }
});
