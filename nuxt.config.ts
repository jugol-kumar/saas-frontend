// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/css/app.css'],
  devtools: {enabled: true},
  modules: [
    'nuxt-icon',
  ],
  plugins: [
    {
      src: 'plugins/bootstrap.js',
      mode: 'client'
    }
  ],
  runtimeConfig:{
    public:{
      baseUrl: process.env.API_URL,
      appUrl: process.env.APP_URL,
    }
  }
});
